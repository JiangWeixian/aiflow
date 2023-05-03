import { ReactComponent as SearchIcon } from '~/components/icons/search.svg'
import { Item, SubItem } from '~/contentScripts/components/commands/common/item'
import { getSelectedItem } from '~/contentScripts/logic/shadow-dom'
import { useTabs } from '~/hooks/use-tabs'
import { actions, pages } from '~/logic/constants'
import { useUserConfig } from '~/logic/store'

import type { ItemProps } from '~/contentScripts/components/commands/common/item'

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

export function SearchTabsSubCommands() {
  const { tabs } = useTabs()
  const pin = useUserConfig(s => s.pinTab)
  const handlePinTab = () => {
    const item = getSelectedItem() as HTMLElement
    const tabId = item?.dataset.tabid
    const tab = tabs?.find(item => String(item.id) === tabId)
    tab && pin(tab)
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
    </>
  )
}
