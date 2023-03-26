import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as RadixDialog from '@radix-ui/react-dialog'
import { Command, useCommandState } from 'cmdk'
import { sendMessage } from 'webext-bridge'

import { useBearStore } from '~/logic/store'
import type { ASK_CHATGPT_PAGE, TRANSLATE_CHATGPT_PAGE } from '~/logic/constants'
import { ASK_CHATGPT, ASK_CHATGPT_WITH, TRANSLATE_WITH } from '~/logic/constants'
import { getSearchInputValue } from '~/contentScripts/logic/search-engine'
import { MajesticonsTranslate } from '~/components/icons/translate'
import { createMessageStore } from '~/logic/openai/message-store'
import { formatTranslatePrompt } from '~/logic/prompts/utils'

// TODO: use theme perfer query
// const theme = 'dark'
const messageStore = createMessageStore()

interface ItemProps {
  onSelect: (type: string, params?: { text?: string }) => void
}

type Pages = 'home' | typeof ASK_CHATGPT_PAGE | typeof TRANSLATE_CHATGPT_PAGE

export function CMDK() {
  // const { resolvedTheme: theme } = useTheme()
  // which command
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const [searchInputValue] = useState(getSearchInputValue())
  // used for switch different page
  const inputValueRef = useRef<string>()
  const containerRef = useRef<HTMLDivElement>(null)
  const commandRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const listRef = useRef(null)
  const [pages, setPages] = useState<Pages[]>(['home'])
  const activePage = pages[pages.length - 1]
  const { upsertConventions, clear } = useBearStore()

  // debug clear all data in localstorage and browser storage
  // useEffect(() => {
  //   clear()
  //   messageStore.clear()
  // }, [clear])

  const popPage = useCallback(() => {
    setPages((pages) => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
  }, [])

  function bounce() {
    if (commandRef.current) {
      commandRef.current.style.transform = 'scale(0.96)'
      setTimeout(() => {
        if (commandRef.current) {
          commandRef.current.style.transform = ''
        }
      }, 100)

      // setInputValue('')
    }
  }

  // trigger on item active(navigate)
  const handleValueChange = useCallback((v: string) => {
    setValue(v)
  }, [])

  // trigger on item select
  const handleValueSelect: ItemProps['onSelect'] = useCallback(async (value: string, params) => {
    console.log('handleValueSelect', value)
    // change pages..
    if (value.endsWith('-page')) {
      setPages(prev => [...prev, value] as Pages[])
      return
    }
    // comunication with background
    if (value === ASK_CHATGPT_WITH) {
      const data = await sendMessage(ASK_CHATGPT, { text: params?.text, action: ASK_CHATGPT_WITH }, 'background')
      upsertConventions(data.message)
      return
    }
    // TODO: should not use send all parent message
    if (value === TRANSLATE_WITH) {
      const data = await sendMessage(ASK_CHATGPT, { text: formatTranslatePrompt(params?.text), action: TRANSLATE_WITH }, 'background')
      upsertConventions(data.message)
    }
  }, [upsertConventions])

  useEffect(() => {
    inputRef?.current?.focus()
  }, [inputRef])

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen(open => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <RadixDialog.Root open={open}>
        <RadixDialog.Portal container={containerRef.current}>
          <RadixDialog.Overlay cmdk-overlay="" className="fixed top-0 left-0 z-0 h-screen w-screen backdrop-blur-sm" />
          <RadixDialog.Content cmdk-dialog="" className="z-50">
            <Command
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') {
                  bounce()
                }

                if (activePage === 'home' || inputValueRef.current?.length) {
                  return
                }

                if (e.key === 'Backspace') {
                  e.preventDefault()
                  popPage()
                  bounce()
                }
              }}
              ref={commandRef}
              value={value}
              onValueChange={handleValueChange}
              loop={true}
              className="shadow-lg"
            >
              <div cmdk-raycast-top-shine="" />
              <div className="flex items-center justify-start gap-2 px-3 pt-1">
                {pages.map(p => (
                  <div key={p} className="rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase shadow">
                    {p}
                  </div>
                ))}
              </div>
              {/* FIXME: autofous looks like not working */}
              <Command.Input ref={inputRef} onValueChange={(v) => {
                inputValueRef.current = v
              }} autofocus={true} autoFocus={true} placeholder="Search for commands..." />
              <hr cmdk-raycast-loader="" />
              <Command.List ref={listRef}>
                {activePage === 'home' && <Home onSelect={handleValueSelect} searchInputValue={searchInputValue} />}
                {/* {activePage === ASK_CHATGPT_PAGE && <AskGPTs onSelect={handleValueSelect} /> } */}
                {/* {activePage === TRANSLATE_CHATGPT_PAGE && <TranslateGPTs onSelect={handleValueSelect} /> } */}
              </Command.List>
              <div cmdk-raycast-footer="" className="justify-end">
                {/* TODO: replace with brand icon */}
                {/* {theme === 'dark' ? <RaycastDarkIcon /> : <RaycastLightIcon />} */}

                <button cmdk-raycast-open-trigger="">
                  <kbd>↵</kbd>
                </button>

                <hr />

                <SubCommand listRef={listRef} selectedValue={value} inputRef={inputRef} onSelect={handleValueSelect} />
              </div>
            </Command>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
      <div id="aiflow-dialog-container" className="raycast fixed top-0 left-0 z-50" ref={containerRef} />
    </>
  )
}

function Home({ onSelect, searchInputValue }: ItemProps & {
  /** Get search input element value, e.g. Google search input */
  searchInputValue: string
}) {
  return (
    <>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Commands">
        <Item isCommand={true} value="Create Workflow">
          <i className="gg-add/0.8 text-mayumi-gray-1200" />
          Create workflow
        </Item>
        <Item isCommand={true} onSelect={() => onSelect(ASK_CHATGPT_WITH, { text: searchInputValue })} value={ASK_CHATGPT_WITH}>
          <i className="gg-girl/0.8 text-mayumi-gray-1200" />
          Ask ChatGPT
        </Item>
        <Item isCommand={true} value={TRANSLATE_WITH}>
          <MajesticonsTranslate className="fill-mayumi-gray-1200/1" />
          Tranasplate
        </Item>
      </Command.Group>
    </>
  )
}

function AskGPTs({ onSelect }: ItemProps) {
  const search = useCommandState(state => state.search)
  return (
    <>
      <Item value={search} isCommand={true} onSelect={() => {
        onSelect(ASK_CHATGPT_WITH, { text: search })
      }}>
        <i className="gg-girl/0.8 text-mayumi-gray-1200" />
        {search || 'Waiting for input...'}
      </Item>
    </>
  )
}

function TranslateGPTs({ onSelect }: ItemProps) {
  const search = useCommandState(state => state.search)
  return (
    <>
      <Item value={search} isCommand={true} onSelect={() => {
        onSelect(TRANSLATE_WITH, { text: search })
      }}>
        <i className="gg-girl/0.8 text-mayumi-gray-1200" />
        {search ?? 'Waiting for input...'}
      </Item>
    </>
  )
}

function Suggestions(props: React.PropsWithChildren<{}>) {
  return <span className="truncate rounded-lg border border-mayumi-gray-600 bg-mayumi-gray-200 px-2 font-mono text-xs text-mayumi-gray-1100">{props.children}</span>
}

function Item({
  children,
  value,
  isCommand = false,
  onSelect,
  disabled = false,
}: {
  children: React.ReactNode
  value?: string
  isCommand?: boolean
  disabled?: boolean
  onSelect?: (value: string) => void
}) {
  return (
    <Command.Item disabled={disabled} value={value} onSelect={onSelect}>
      {children}
      <span cmdk-raycast-meta="">{isCommand ? 'Command' : 'Application'}</span>
    </Command.Item>
  )
}

function SubCommand({
  inputRef,
  listRef,
  selectedValue,
  onSelect,
}: {
  inputRef: React.RefObject<HTMLInputElement>
  listRef: React.RefObject<HTMLElement>
  selectedValue: string
} & ItemProps) {
  const [open, setOpen] = useState(false)
  const [, setInputValue] = useState<string>()
  const subCommandinputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'm' && e.metaKey) {
        e.preventDefault()
        setOpen(o => !o)
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  useEffect(() => {
    const el = listRef.current

    if (!el) {
      return
    }

    if (open) {
      el.style.overflow = 'hidden'
    } else {
      el.style.overflow = ''
    }
  }, [open, listRef])

  useEffect(() => {
    subCommandinputRef?.current?.focus()
  }, [subCommandinputRef])

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal={true}>
      <Popover.Trigger cmdk-raycast-subcommand-trigger="" onClick={() => setOpen(true)} aria-expanded={open}>
        Actions
        <kbd>⌘</kbd>
        <kbd>M</kbd>
      </Popover.Trigger>
      <Popover.Content
        side="top"
        align="end"
        className="raycast-submenu outline-none"
        sideOffset={16}
        alignOffset={0}
        onCloseAutoFocus={(e) => {
          e.preventDefault()
          inputRef?.current?.focus()
        }}
      >
        <Command loop={true} shouldFilter={false}>
          <Command.List>
            <Command.Group heading={selectedValue?.toUpperCase()}>
              {selectedValue === ASK_CHATGPT_WITH && <AskGPTSubCommands onSelect={onSelect} />}
              {selectedValue === TRANSLATE_WITH && <TranslateSubCommands onSelect={onSelect} />}
            </Command.Group>
          </Command.List>
          <Command.Input autoFocus={true} autofocus={true} onValueChange={setInputValue} ref={subCommandinputRef} placeholder="Search for actions..." />
        </Command>
      </Popover.Content>
    </Popover.Root>
  )
}

function AskGPTSubCommands({ onSelect }: ItemProps) {
  const { search } = useCommandState(state => state)
  return (
    <>
      <SubItem value="search-input" onSelect={() => {
        onSelect(ASK_CHATGPT_WITH, { text: getSearchInputValue() })
      }} shortcut="↵">
        <span className="truncate">{getSearchInputValue() ?? 'Search input'}</span>
      </SubItem>
      <SubItem onSelect={() => {
        onSelect(ASK_CHATGPT_WITH, { text: search })
      }} value={search || '...'} shortcut="⌘ ↵">
        <span className="truncate">{search || '...'}</span>
      </SubItem>
    </>
  )
}

function TranslateSubCommands({ onSelect }: ItemProps) {
  const { search } = useCommandState(state => state)
  return (
    <>
      <SubItem value="translate-full-page" onSelect={() => {
        onSelect(TRANSLATE_WITH, { text: getSearchInputValue() })
      }} shortcut="↵">
        <span className="truncate">{'Translate full page'}</span>
      </SubItem>
      <SubItem onSelect={() => {
        onSelect(TRANSLATE_WITH, { text: search })
      }} value={search || '...'} shortcut="⌘ ↵">
        <span className="truncate">{search || '...'}</span>
      </SubItem>
    </>
  )
}

function SubItem({ children, shortcut, value, onSelect }: { children: React.ReactNode; shortcut: string; value?: string } & ItemProps) {
  return (
    <Command.Item value={value} onSelect={onSelect}>
      {children}
      <div cmdk-raycast-submenu-shortcuts="">
        {shortcut.split(' ').map((key) => {
          return <kbd key={key}>{key}</kbd>
        })}
      </div>
    </Command.Item>
  )
}
