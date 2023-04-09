import { onMessage, sendMessage } from 'webext-bridge'
import type { Tabs } from 'webextension-polyfill'
import browser from 'webextension-polyfill'
import { ChatGPTAPI } from '~/logic/openai'
import { ASK_CHATGPT, GET_CURRENT_TAB, OPENAI_API_KEY } from '~/logic/constants'
import { createMessageStore } from '~/logic/openai/message-store'
import { createUserConfig } from '~/logic/store/user-config'
import { systemMessages } from '~/logic/prompts/constants'
import { formatters } from '~/logic/prompts/utils'

const isDev = process.env.NODE_ENV !== 'production'

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

let client: ChatGPTAPI
const userConfigStore = createUserConfig()
const createClient = async () => {
  if (client) {
    return { client, key: undefined }
  }
  const key = isDev ? process.env.OPENAI_API_KEY : await userConfigStore.get(OPENAI_API_KEY)
  if (!key) {
    console.error('No API key found')
    return { client, key }
  }
  client = new ChatGPTAPI(
    { apiKey: key },
  )
  return { client, key }
}

onMessage(GET_CURRENT_TAB, async () => {
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    return { id: tabs[0]?.id }
  } catch {
    return {}
  }
})

onMessage(ASK_CHATGPT, async (message) => {
  try {
    const { data } = message
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    const action = data.action
    console.log(action, 'in background', tabs, message)
    if (!data.text) {
      return {
        message: undefined,
      }
    }
    const { client: chatClient } = await createClient()
    // NOTE: Not sure previous messages will need more tokens
    const parentMessageId = await store.get(action)
    const resp = await chatClient.sendMessage(formatters[action](data.text), {
      stream: true,
      systemMessage: systemMessages[action] ?? undefined,
      parentMessageId,
    })
    // save conventions into local browser storage
    await store.set(action, resp.id)
    await browser.notifications.create({
      type: 'basic',
      iconUrl: browser.runtime.getURL('assets/icon-512.png'),
      title: data.text,
      message: resp.text,
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
