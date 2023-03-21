import { onMessage, sendMessage } from 'webext-bridge'
import type { Tabs } from 'webextension-polyfill'
import browser from 'webextension-polyfill'
import { GET_CURRENT_TAB_ID } from '~/logic/constants'

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

onMessage(GET_CURRENT_TAB_ID, async (message) => {
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    console.log(tabs, message)
    return { id: tabs[0]?.id }
  } catch {
    return {}
  }
})

onMessage('as-chatgpt', async () => {
  try {
    const tab = await browser.tabs.get(previousTabId)
    return {
      title: tab?.id,
    }
  } catch {
    return {
      title: undefined,
    }
  }
})
