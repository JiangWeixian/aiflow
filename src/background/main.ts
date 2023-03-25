import { onMessage, sendMessage } from 'webext-bridge'
import type { Tabs } from 'webextension-polyfill'
import browser from 'webextension-polyfill'
import { OpenAIProvider } from '~/logic/openai'
import { GET_CURRENT_TAB } from '~/logic/constants'

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('Extension installed')
})

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

const client = new OpenAIProvider(
  // TODO: replace with user config
  'gpt-3.5-turbo',
  { apiKey: process.env.OPENAI_API_KEY! },
)

onMessage(GET_CURRENT_TAB, async (message) => {
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    console.log(tabs, message, client, process.env.OPENAI_API_KEY)
    client.sendMessage('hello! my name is jiangweixian', {
      stream: true,
      onEvent(e) {
        console.log(e.data)
      },
    })
    return { id: tabs[0]?.id }
  } catch {
    return {}
  }
})

onMessage('ask-chatgpt', async (message) => {
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    console.log(tabs, message, client, process.env.OPENAI_API_KEY)
    const resp = await client.sendMessage('hello! my name is jiangweixian', {
      stream: true,
      onEvent(e) {
        console.log(e.data)
      },
    })
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
