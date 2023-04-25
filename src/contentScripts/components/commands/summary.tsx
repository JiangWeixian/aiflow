/**
 * @todo Summary lang should configable
 */

import { CommonSubCommandItems } from './common/sub-commands'
import { Item, SubItem } from '~/contentScripts/components/commands/common/item'
import { actions, pages } from '~/logic/constants'

import type { ItemProps } from '~/contentScripts/components/commands/common/item'

export function SummaryCommand({ onSelect }: ItemProps) {
  return (
    <Item
      isCommand={true}
      onSelect={() => onSelect(pages.SUMMARY_WITH_PAGE)}
      value={pages.SUMMARY_WITH_PAGE}
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
        onSelect={() => onSelect(actions.SUMMARY_WITH, { text: document.body.textContent ?? '' })}
        shortcut="↵"
      >
        <span className="truncate">Summary current page</span>
      </SubItem>
      <CommonSubCommandItems page={pages.SUMMARY_WITH_PAGE} onSelect={onSelect} />
    </>
  )
}
