import { onMessage, sendMessage } from 'webext-bridge'
import browser from 'webextension-polyfill'

import {
  channels,
  GET_CURRENT_TAB,
  OPENAI_API_KEY,
} from '~/logic/constants'
import { ChatGPTAPI } from '~/logic/openai'
import { createMessageStore } from '~/logic/openai/message-store'
import { systemMessages } from '~/logic/prompts/constants'
import { prompters } from '~/logic/prompts/utils'
import { userConfig } from '~/logic/store/user-config'

import type { Tabs } from 'webextension-polyfill'

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
const createClient = async () => {
  if (client) {
    return { client, key: undefined }
  }
  const key = isDev ? process.env.OPENAI_API_KEY : (await userConfig())[OPENAI_API_KEY]
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

onMessage(channels.ASK_CHATGPT, async (message) => {
  try {
    const { data } = message
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    const tabId = tabs[0].id
    const action = data.action
    console.log(action, 'in background', tabs, message)
    const resolvedTest = await prompters[action]?.(data.text)
    if (!resolvedTest || !data.text) {
      return {
        message: undefined,
      }
    }
    const { client: chatClient } = await createClient()
    const parentMessageId = await store.get(action)
    const resp = await chatClient.sendMessage(resolvedTest, {
      stream: data.stream ?? true,
      systemMessage: systemMessages[action] ?? undefined,
      parentMessageId,
      async onBeforeSendMessage(userMessage) {
        tabId && sendMessage(channels.ASK_CHATGPT, { message: userMessage, action }, { context: 'content-script', tabId })
      },
      async onProgress(partialResponse) {
        await store.set(action, partialResponse.id)
        tabId && sendMessage(channels.ASK_CHATGPT, { message: partialResponse, action }, { context: 'content-script', tabId })
      },
    })
    // save conventions into local browser storage
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

onMessage(channels.QUERY_TABS, async () => {
  try {
    const tabs: any = await browser.tabs.query({ currentWindow: true })
    return { tabs: tabs ?? [] }
  } catch {
    return { tabs: [] }
  }
})

onMessage(channels.UPATE_TABS, async (message) => {
  try {
    const { data } = message
    const tab: any = await browser.tabs.update(data.tabId, { active: data.active })
    return { tabs: tab ?? {} }
  } catch (error) {
    console.error(error)
    return { tabs: {}, error: (error as Error).message }
  }
})

onMessage(channels.GROUP_TABS, async (message) => {
  try {
    const { data } = message
    const { groups } = data
    Object.keys(groups).forEach(async (g) => {
      // refs: https://developer.chrome.com/docs/extensions/reference/tabs/#method-group
      // @ts-expect-error -- not type safe
      const groupId = await browser.tabs.group({ tabIds: groups[g].map(item => item.id) })
      // refs: https://developer.chrome.com/docs/extensions/reference/tabGroups/#method-update
      // @ts-expect-error -- not type safe
      await browser.tabGroups.update(groupId, { title: g })
    })
    return {}
  } catch (e) {
    console.error('GROUP_TABS failed', e)
    return {}
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
