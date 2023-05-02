import { Item } from '~/contentScripts/components/commands/common/item'
import { pages } from '~/logic/constants'

import type { ItemProps } from '~/contentScripts/components/commands/common/item'

export function SearchTabsCommand({ onSelect }: ItemProps) {
  return (
    <Item
      isCommand={true}
      onSelect={() => onSelect(pages.SEARCH_TABS_PAGE)}
      value={pages.SEARCH_TABS_PAGE}
    >
      Search Tabs
    </Item>
  )
}
