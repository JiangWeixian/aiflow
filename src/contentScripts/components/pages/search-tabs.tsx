import { Command } from 'cmdk'
import { sendMessage } from 'webext-bridge'

import { Item } from '~/contentScripts/components/commands/common/item'
import { useTabs } from '~/hooks/use-tabs'
import { channels } from '~/logic/constants'
import { formatTabItemValue } from '~/logic/normalize'

import type { Tabs } from 'webextension-polyfill'

export function SearchTabsPage() {
  const { tabs, pinedTabs } = useTabs()
  const goto = async (tab: Tabs.Tab) => {
    const result = await sendMessage(channels.UPATE_TABS, { active: true, tabId: tab.id })
    if (result.error) {
      window.open(tab.url, '_blank', 'noopener,noreferrer')
    }
  }
  return (
    <>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Tabs">
        {pinedTabs?.map((item) => {
          return (
            <Item
              key={item.id}
              value={formatTabItemValue(item)}
              meta="Pined Tab"
              data-tabid={item.id}
              onSelect={() => {
                goto(item)
              }}
            >
              {item.title}
            </Item>
          )
        })}
        {tabs?.map((item) => {
          return (
            <Item
              key={item.id}
              value={formatTabItemValue(item)}
              meta="Tab"
              data-tabid={item.id}
              onSelect={() => {
                console.log('SearchTabsPage', item)
                goto(item)
              }}
            >
              {item.title}
            </Item>
          )
        })}
      </Command.Group>
    </>
  )
}
