import { ReactComponent as ReadMe } from '~/components/icons/readme.svg'
import { Item, SubItem } from '~/contentScripts/components/commands/common/item'
import { actions } from '~/logic/constants'
import { useCMDKStore } from '~/logic/store'

export function HistoryCommand() {
  const { updateHistoryOpen, setOpen } = useCMDKStore()
  return (
    <Item
      isCommand={true}
      value={actions.OPEN_HISTORY}
      onSelect={() => {
        setOpen(false)
        updateHistoryOpen(true)
      }}
    >
      <ReadMe />
      View History
    </Item>
  )
}

export function HistorySubCommands() {
  const { updateHistoryOpen, setOpen } = useCMDKStore()
  return (
    <>
      <SubItem
        value={actions.OPEN_HISTORY}
        onSelect={() => {
          setOpen(false)
          updateHistoryOpen(true)
        }}
        shortcut="↵"
      >
        <span className="truncate">View History</span>
      </SubItem>
    </>
  )
}
