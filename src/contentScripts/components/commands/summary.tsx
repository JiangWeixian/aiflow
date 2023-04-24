import { Item, SubItem } from '~/contentScripts/components/commands/common/item'
import type { ItemProps } from '~/contentScripts/components/commands/common/item'
import { actions } from '~/logic/constants'

export function SummaryCommand({ onSelect }: ItemProps) {
  return (
    <Item
      isCommand={true}
      onSelect={() => onSelect(actions.SUMMARY_WITH)}
      value={actions.SUMMARY_WITH}
    >
      <i className="gg-notes/0.8 text-mayumi-gray-1200" />
      Summary
    </Item>
  )
}

export function SummarySubCommands({ onSelect }: ItemProps) {
  return (
    <>
      <SubItem
        value={actions.SUMMARY_WITH}
        onSelect={() => onSelect(actions.SUMMARY_WITH)}
        shortcut="↵"
      >
        <span className="truncate">Summary current page</span>
      </SubItem>
    </>
  )
}
