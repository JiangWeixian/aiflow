import { Command } from 'cmdk'
import { useEffect, useState } from 'react'
import { sendMessage } from 'webext-bridge'

import { Item } from '~/contentScripts/components/commands/common/item'
import { channels } from '~/logic/constants'

import type { Tabs } from 'webextension-polyfill'

export function SearchTabsPage() {
  const [tabs, setTabs] = useState<Tabs.Tab[]>()
  useEffect(() => {
    const queryTabs = async () => {
      const { tabs } = await sendMessage(channels.QUERY_TABS, {})
      setTabs(tabs)
    }
    queryTabs()
  }, [])
  const goto = async (tab: Tabs.Tab) => {
    const result = await sendMessage(channels.UPATE_TABS, { active: true, tabId: tab.id })
    console.debug(result)
  }
  return (
    <>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Tabs">
        {tabs?.map((item) => {
          return (
            <Item
              key={item.id}
              value={item.title}
              meta="Tab"
              onSelect={() => {
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
