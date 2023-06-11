import { sendMessage } from 'webext-bridge/content-script'

import { ReactComponent as SearchIcon } from '~/components/icons/search.svg'
import { Item, SubItem } from '~/contentScripts/components/commands/common/item'
import { getSelectedItem } from '~/contentScripts/logic/shadow-dom'
import { useTabs } from '~/hooks/use-tabs'
import {
  actions,
  channels,
  pages,
} from '~/logic/constants'
import { parseGroupResults } from '~/logic/parse'
import { prompters } from '~/logic/prompts/utils'
import { useUserConfig } from '~/logic/store'

import type { ItemProps } from '~/contentScripts/components/commands/common/item'
import type { ChatMessage } from '~/logic/openai/types'

export function SearchTabsCommand({ onSelect }: ItemProps) {
  return (
    <Item
      isCommand={true}
      onSelect={() => onSelect(pages.SEARCH_TABS_PAGE)}
      value={pages.SEARCH_TABS_PAGE}
    >
      <SearchIcon />
      Search Tabs
    </Item>
  )
}

export function GroupTabsCommand() {
  const { tabs } = useTabs()
  return (
    <Item
      isCommand={true}
      // onSelect={() => onSelect(pages.SEARCH_TABS_PAGE)}
      onSelect={async () => {
        const prompt = prompters[actions.GROUP_TABS]!
        const resolvedTabs = tabs?.map(item => ({ id: item.id, title: item.title })) ?? ''
        const text = await prompt(resolvedTabs)
        const response: { message: ChatMessage } = await sendMessage(channels.ASK_CHATGPT, { text, action: actions.GROUP_TABS }, 'background')
        const groups = parseGroupResults(response.message.text)
        console.debug('grouped tabs', groups)
        await sendMessage(channels.GROUP_TABS, { groups }, 'background')
      }}
      value={actions.GROUP_TABS}
    >
      <i className="gg-display-grid/0.75" />
      Group Tabs
    </Item>
  )
}

export function SearchTabsSubCommands() {
  const { tabs, pinedTabs } = useTabs()
  const pin = useUserConfig(s => s.pinTab)
  const handlePinTab = (status: 0 | 1 = 1) => {
    const item = getSelectedItem() as HTMLElement
    const tabId = item?.dataset.tabid
    let tab = tabs?.find(item => String(item.id) === tabId)
    if (!tab) {
      tab = pinedTabs?.find(item => String(item.id) === tabId)
    }
    tab && pin(tab, status)
  }
  return (
    <>
      <SubItem
        value={actions.PIN_TAB}
        onSelect={() => handlePinTab()}
        shortcut="↵"
      >
        <span className="truncate">Pin Tab</span>
      </SubItem>
      <SubItem
        value={actions.UNPIN_TAB}
        onSelect={() => handlePinTab(0)}
        shortcut="↵"
      >
        <span className="truncate">UnPin Tab</span>
      </SubItem>
    </>
  )
}
