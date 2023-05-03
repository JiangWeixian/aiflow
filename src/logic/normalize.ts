import type { Tabs } from 'webextension-polyfill'

/**
 * @description Remove the -page suffix from a page name
 */
export const convertPageToAction = (page: string) => {
  return page.replace('-page', '')
}

export const formatTabItemValue = (tab: Tabs.Tab) => {
  return `tabid${tab.id}-${tab.title}`
}

export const normalizeSubCommandTitle = (value: string) => {
  if (!value.startsWith('tabid')) {
    return value
  }
  const seqs = value.split('-')
  return seqs[seqs.length - 1]
}
