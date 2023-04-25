import { SubItem } from './item'
import { useCMDKStore } from '~/logic/store'

import type { PAGES } from '~/logic/constants'
import type { ItemProps } from './item'

interface CommonSubCommandItemsProps extends ItemProps {
  page: PAGES
}

export function CommonSubCommandItems(props: CommonSubCommandItemsProps) {
  const { setSubCommandOpen } = useCMDKStore()
  return (
    <SubItem
      value="open-chat"
      onSelect={() => {
        setSubCommandOpen(false)
        props.onSelect(props.page)
      }}
      shortcut="↵"
    >
      <span className="truncate">Open Chat</span>
    </SubItem>
  )
}
