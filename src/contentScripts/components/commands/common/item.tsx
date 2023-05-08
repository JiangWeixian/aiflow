import { Command } from 'cmdk'

export interface ItemProps {
  onSelect: (type: string, params?: { text?: string }) => void
}

export function Item({
  children,
  value,
  isCommand = false,
  onSelect,
  disabled = false,
  meta = 'Application',
  ...props
}: {
  children: React.ReactNode
  value?: string
  isCommand?: boolean
  disabled?: boolean
  onSelect?: (value: string) => void
  meta?: string
}) {
  return (
    <Command.Item
      disabled={disabled}
      value={value}
      onSelect={onSelect}
      {...props}
    >
      {children}
      <span cmdk-raycast-meta="">{isCommand ? 'Command' : meta}</span>
    </Command.Item>
  )
}

export function SubItem({ children, shortcut, value, onSelect }: { children: React.ReactNode; shortcut: string; value?: string } & ItemProps) {
  return (
    <Command.Item
      value={value}
      onSelect={onSelect}
    >
      {children}
      <div cmdk-raycast-submenu-shortcuts="">
        {shortcut.split(' ').map((key) => {
          return <kbd key={key}>{key}</kbd>
        })}
      </div>
    </Command.Item>
  )
}
