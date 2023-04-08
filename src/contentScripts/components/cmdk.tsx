import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as RadixDialog from '@radix-ui/react-dialog'
import { Command, useCommandState } from 'cmdk'
import { sendMessage } from 'webext-bridge'
// autofocus not working on shadow-dom, this package make it work
// more about this bugs: https://github.com/whatwg/html/issues/833 and https://github.com/theKashey/react-focus-lock/issues/188
import FocusLock from 'react-focus-lock'
import { Input } from 'mayumi/input'
import TurndownService from 'turndown'

import { useBearStore } from '~/logic/store'
import type { ASK_CHATGPT_PAGE } from '~/logic/constants'
import { ASK_CHATGPT, ASK_CHATGPT_WITH, CONFIG_PAGE, OPENAI_API_KEY, SUMMARY_WITH, TRANSLATE_WITH } from '~/logic/constants'
import { getSearchInputValue } from '~/contentScripts/logic/search-engine'
import { MajesticonsTranslate } from '~/components/icons/translate'
import { ReactComponent as Trash } from '~/components/icons/trash.svg'
import { ReactComponent as OptionsIcon } from '~/components/icons/options.svg'
import { createMessageStore } from '~/logic/openai/message-store'
import { createUserConfig } from '~/logic/store/browser'
import { formatTranslatePrompt } from '~/logic/prompts/utils'

const messageStore = createMessageStore()
const userConfigStore = createUserConfig()

interface ItemProps {
  onSelect: (type: string, params?: { text?: string }) => void
}

type Pages = 'home' | typeof ASK_CHATGPT_PAGE | typeof CONFIG_PAGE

const turndownService = new TurndownService()

// Trigger ⌘j
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
  const { upsertConventions, updateChatOpen } = useBearStore()

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
    console.log('handleValueSelect', value, params)
    // change pages..
    if (value.endsWith('-page')) {
      setPages(prev => [...prev, value] as Pages[])
      return
    }
    // comunication with background
    if (value === ASK_CHATGPT_WITH) {
      const data = await sendMessage(ASK_CHATGPT, { text: params?.text, action: ASK_CHATGPT_WITH }, 'background')
      upsertConventions(ASK_CHATGPT_WITH, data.message)
      setOpen(false)
      return
    }
    // Should send all parent message?
    if (value === TRANSLATE_WITH) {
      const data = await sendMessage(ASK_CHATGPT, { text: formatTranslatePrompt(params?.text), action: TRANSLATE_WITH }, 'background')
      upsertConventions(TRANSLATE_WITH, data.message)
      setOpen(false)
    }
    if (value === SUMMARY_WITH) {
      // TODO: logic
      turndownService.remove(['script', 'nav', 'next-route-announcer'])
      console.log(turndownService.turndown(document.body))
    }
  }, [upsertConventions])
  // Toggle the menu when ⌘j is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && e.metaKey) {
        setOpen(open => !open)
        // Always pop confitg page when modal open/close
        if (activePage === 'config-page') {
          popPage()
        }
        updateChatOpen(false)
      }

      // close modal when press esc
      if (e.key === 'Escape') {
        setOpen(false)
        updateChatOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [updateChatOpen, activePage, popPage])

  const shouldDisplayInput = activePage === 'home'

  return (
    <>
      <RadixDialog.Root open={open}>
        <RadixDialog.Portal container={containerRef.current}>
          <RadixDialog.Overlay cmdk-overlay="" className="fixed top-0 left-0 z-0 h-screen w-screen backdrop-blur-sm" />
          <RadixDialog.Content cmdk-dialog="" className="z-50 shadow-lg">
            <FocusLock>
              <Command
                ref={commandRef}
                value={value}
                onValueChange={handleValueChange}
                loop={true}
              >
                <div cmdk-raycast-top-shine="" />
                <div className="flex items-center justify-start gap-2 px-3 pt-1">
                  {pages.map(p => (
                    <div key={p} className="rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow">
                      {p}
                    </div>
                  ))}
                </div>
                {shouldDisplayInput && (
                  <Command.Input
                    ref={inputRef}
                    onValueChange={(v) => {
                      inputValueRef.current = v
                    }}
                    autoFocus={true}
                    placeholder="Search for commands..."
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
                  />
                )}
                {shouldDisplayInput && <hr cmdk-raycast-loader="" />}
                <Command.List className="min-h-[400px]" ref={listRef}>
                  {activePage === 'home' && <Home onSelect={handleValueSelect} searchInputValue={searchInputValue} />}
                  {activePage === CONFIG_PAGE && <Options />}
                  {/* {activePage === ASK_CHATGPT_PAGE && <AskGPTs onSelect={handleValueSelect} /> } */}
                  {/* {activePage === TRANSLATE_CHATGPT_PAGE && <TranslateGPTs onSelect={handleValueSelect} /> } */}
                </Command.List>
                <div cmdk-raycast-footer="" className="justify-end">
                  <button cmdk-raycast-open-trigger="">
                    <kbd>↵</kbd>
                  </button>

                  <hr />

                  <SubCommand listRef={listRef} selectedValue={value} inputRef={inputRef} onSelect={handleValueSelect} />
                </div>
              </Command>
            </FocusLock>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
      <div id="aiflow-dialog-container" className="raycast fixed top-0 left-0" ref={containerRef} />
    </>
  )
}

function Home({ onSelect, searchInputValue }: ItemProps & {
  /** Get search input element value, e.g. Google search input */
  searchInputValue: string
}) {
  const { clear } = useBearStore()
  return (
    <>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Commands">
        {/* TODO: create workflow */}
        {/* <Item isCommand={true} value="Create Workflow">
          <i className="gg-add/0.8 text-mayumi-gray-1200" />
          Create workflow
        </Item> */}
        <Item isCommand={true} value="clear-storage" onSelect={() => {
          clear()
          messageStore.clear()
        }}>
          <Trash />
          Clear Storage
        </Item>
        <Item isCommand={true} onSelect={() => onSelect(CONFIG_PAGE)} value={CONFIG_PAGE}>
          <OptionsIcon />
          Config
        </Item>
        <Item isCommand={true} onSelect={() => onSelect(ASK_CHATGPT_WITH, { text: searchInputValue })} value={ASK_CHATGPT_WITH}>
          <i className="gg-girl/0.8 text-mayumi-gray-1200" />
          Ask ChatGPT
        </Item>
        <Item isCommand={true} value={TRANSLATE_WITH}>
          <MajesticonsTranslate className="fill-mayumi-gray-1200/1" />
          Tranasplate
        </Item>
        {/* TODO: Change Icon */}
        <Item isCommand={true} value={SUMMARY_WITH}>
          <MajesticonsTranslate className="fill-mayumi-gray-1200/1" />
          Summary
        </Item>
      </Command.Group>
    </>
  )
}

function Options() {
  const [key, setKey] = useState<string>()
  useEffect(() => {
    userConfigStore.get(OPENAI_API_KEY)
      .then((res) => {
        setKey(res)
      })
  }, [])
  return (
    <div className="flex flex-col items-center justify-center p-4 pt-8">
      <Input
        light={true}
        className="w-1/2"
        value={key}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            userConfigStore.set({ [OPENAI_API_KEY]: e.currentTarget.value })
          }
          return false
        }}
      />
    </div>
  )
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

// Trigger by m key
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

  const hasSubCommand = selectedValue !== 'home'

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'm' && e.metaKey) {
        e.preventDefault()
        hasSubCommand && setOpen(o => !o)
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [hasSubCommand])

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

  return (
    <Popover.Root open={open} onOpenChange={(v) => {
      if (!hasSubCommand) {
        return
      }
      setOpen(v)
    }} modal={true}>
      <Popover.Trigger disabled={!hasSubCommand} cmdk-raycast-subcommand-trigger="" onClick={() => setOpen(true)} aria-expanded={open}>
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
        <FocusLock>
          <Command loop={true} shouldFilter={false}>
            <Command.List>
              <Command.Group heading={selectedValue?.toUpperCase()}>
                {selectedValue === ASK_CHATGPT_WITH && <AskGPTSubCommands onSelect={onSelect} />}
                {selectedValue === TRANSLATE_WITH && <TranslateSubCommands onSelect={onSelect} />}
                {selectedValue === SUMMARY_WITH && <SummarySubCommands onSelect={onSelect} />}
              </Command.Group>
            </Command.List>
            <Command.Input autoFocus={true} onValueChange={setInputValue} ref={subCommandinputRef} placeholder="Search for actions..." />
          </Command>
        </FocusLock>
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
      {/* TODO: translate selected word */}
      {/* <SubItem value="translate-full-page" onSelect={() => {
        onSelect(TRANSLATE_WITH, { text: getSearchInputValue() })
      }} shortcut="↵">
        <span className="truncate">{'Translate full page'}</span>
      </SubItem> */}
      <SubItem onSelect={() => {
        onSelect(TRANSLATE_WITH, { text: search })
      }} value={search || '...'} shortcut="⌘ ↵">
        <span className="truncate">{search || '...'}</span>
      </SubItem>
    </>
  )
}

function SummarySubCommands({ onSelect }: ItemProps) {
  const { search } = useCommandState(state => state)
  return (
    <>
      <SubItem onSelect={() => {
        onSelect(SUMMARY_WITH, { text: search })
      }} value={search || '...'} shortcut="⌘ ↵">
        <span className="truncate">{'Summary full page'}</span>
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
