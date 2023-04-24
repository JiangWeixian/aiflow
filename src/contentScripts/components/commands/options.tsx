import { Item, SubItem } from '~/contentScripts/components/commands/common/item'
import type { ItemProps } from '~/contentScripts/components/commands/common/item'
import { pages } from '~/logic/constants'
import { ReactComponent as OptionsIcon } from '~/components/icons/options.svg'

export function OptionCommand({ onSelect }: ItemProps) {
  return (
    <Item
      isCommand={true}
      onSelect={() => onSelect(pages.CONFIG_PAGE)}
      value={pages.CONFIG_PAGE}
    >
      <OptionsIcon />
      Config
    </Item>
  )
}

export function OptionSubCommands({ onSelect }: ItemProps) {
  return (
    <>
      <SubItem
        value={pages.CONFIG_PAGE}
        onSelect={() => onSelect(pages.CONFIG_PAGE)}
        shortcut="↵"
      >
        <span className="truncate">Config</span>
      </SubItem>
    </>
  )
}
