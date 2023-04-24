import { useBearStore } from '~/logic/store'
import { Item, SubItem } from '~/contentScripts/components/commands/common/item'
import { actions } from '~/logic/constants'
import { createMessageStore } from '~/logic/openai/message-store'
import { ReactComponent as Trash } from '~/components/icons/trash.svg'

const messageStore = createMessageStore()

export function StorageCommand() {
  const { clear } = useBearStore()
  return (
    <Item
      isCommand={true}
      value={actions.CLEAR_STORAGE}
      onSelect={() => {
        clear()
        messageStore.clear()
      }}
    >
      <Trash />
      Clear Storage
    </Item>
  )
}

export function StorageSubCommands() {
  const { clear } = useBearStore()
  return (
    <>
      <SubItem
        value={actions.CLEAR_STORAGE}
        onSelect={() => {
          clear()
          messageStore.clear()
        }}
        shortcut="↵"
      >
        <span className="truncate">Clear Storage</span>
      </SubItem>
    </>
  )
}
