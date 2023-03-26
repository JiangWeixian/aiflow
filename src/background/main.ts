import { onMessage, sendMessage } from 'webext-bridge'
import type { Tabs } from 'webextension-polyfill'
import browser from 'webextension-polyfill'
import { ChatGPTAPI } from '~/logic/openai'
import { ASK_CHATGPT, GET_CURRENT_TAB } from '~/logic/constants'
import { createMessageStore } from '~/logic/openai/message-store'

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('Extension installed')
})

const store = createMessageStore()

let previousTabId = 0

// communication example: send previous tab title from background page
// see shim.d.ts for type declaration
browser.tabs.onActivated.addListener(async ({ tabId }) => {
  if (!previousTabId) {
    previousTabId = tabId
    return
  }

  let tab: Tabs.Tab

  try {
    tab = await browser.tabs.get(previousTabId)
    previousTabId = tabId
  } catch {
    return
  }

  // eslint-disable-next-line no-console
  console.log('previous tab', tab)
  sendMessage('tab-prev', { title: tab.title }, { context: 'content-script', tabId })
})

const client = new ChatGPTAPI(
  { apiKey: process.env.OPENAI_API_KEY! },
)

onMessage(GET_CURRENT_TAB, async (message) => {
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    console.log(tabs, message, client, process.env.OPENAI_API_KEY)
    client.sendMessage('hello! my name is jiangweixian', {
      stream: true,
      onProgress(e) {
        console.log(e)
      },
    })
    return { id: tabs[0]?.id }
  } catch {
    return {}
  }
})

onMessage(ASK_CHATGPT, async (message) => {
  try {
    const { data } = message
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    console.log(ASK_CHATGPT, 'in background', tabs, message)
    if (!data.text) {
      return {
        message: undefined,
      }
    }
    const parentMessageId = await store.get(ASK_CHATGPT)
    const resp = await client.sendMessage(data.text, {
      stream: true,
      parentMessageId,
      onProgress(e) {
        console.log(e)
      },
    })
    await store.set(ASK_CHATGPT, resp.id)
    return {
      // promise message is safe json-like value
      message: resp as any,
    }
  } catch {
    return {
      message: undefined,
    }
  }
})

// test for webext-bridge is work
onMessage('test', async (data) => {
  try {
    sendMessage('test', { value: data.data.value }, 'content-script')
    return {
      message: data.data.value,
    }
  } catch {
    return {
      message: undefined,
    }
  }
})
