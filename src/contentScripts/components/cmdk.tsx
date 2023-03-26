import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as RadixDialog from '@radix-ui/react-dialog'
import { Command, useCommandState } from 'cmdk'
import { sendMessage } from 'webext-bridge'

import { useBearStore } from '~/logic/store'
import { ASK_CHATGPT, ASK_CHATGPT_PAGE, ASK_CHATGPT_WITH } from '~/logic/constants'
import { getSearchInputValue } from '~/contentScripts/logic/search-engine'
import { MajesticonsTranslate } from '~/components/icons/translate'
import { createMessageStore } from '~/logic/openai/message-store'

// TODO: use theme perfer query
// const theme = 'dark'
const messageStore = createMessageStore()

interface ItemProps {
  onSelect: (type: string, params?: { text: string }) => void
}

type Pages = 'home' | typeof ASK_CHATGPT_PAGE

export function CMDK() {
  // const { resolvedTheme: theme } = useTheme()
  // which command
  const [value, setValue] = React.useState('linear')
  const [open, setOpen] = useState(false)
  const [searchInputValue] = useState(getSearchInputValue())
  // used for switch different page
  const inputValueRef = useRef<string>()
  const containerRef = useRef<HTMLDivElement>(null)
  const commandRef = React.useRef<HTMLDivElement | null>(null)
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const listRef = React.useRef(null)
  const [pages, setPages] = React.useState<Pages[]>(['home'])
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
    console.log(v)
    setValue(v)
  }, [])

  // trigger on item select
  const handleValueSelect: ItemProps['onSelect'] = useCallback(async (value: string, params) => {
    console.log('handleValueSelect', value)
    // change pages..
    if (value === ASK_CHATGPT_PAGE) {
      setPages(prev => [...prev, ASK_CHATGPT_PAGE])
      return
    }
    // comunication with background
    if (value === ASK_CHATGPT_WITH) {
      const data = await sendMessage(ASK_CHATGPT, { text: params?.text }, 'background')
      upsertConventions(data.message)
      return
    }
    if (value === ASK_CHATGPT) {
      const searchValue = getSearchInputValue()
      const data = await sendMessage(ASK_CHATGPT, { text: searchValue }, 'background')
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
          <RadixDialog.Overlay cmdk-overlay="" onClick={() => setOpen(false)} className="fixed top-0 left-0 z-0 h-screen w-screen backdrop-blur-sm" />
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
                  <div key={p} className="rounded-md bg-mayumi-gray-300 px-3 py-1 text-xs uppercase shadow">
                    {p}
                  </div>
                ))}
              </div>
              {/* autoFocus not working, use autofocus instead  */}
              <Command.Input ref={inputRef} onValueChange={(v) => {
                inputValueRef.current = v
              }} autofocus={true} autoFocus={true} placeholder="Search for commands..." />
              <hr cmdk-raycast-loader="" />
              <Command.List ref={listRef}>
                {activePage === 'home' && <Home onSelect={handleValueSelect} searchInputValue={searchInputValue} />}
                {activePage === ASK_CHATGPT_PAGE && <AskGPTs onSelect={handleValueSelect} /> }
              </Command.List>
              <div cmdk-raycast-footer="" className="justify-end">
                {/* TODO: replace with brand icon */}
                {/* {theme === 'dark' ? <RaycastDarkIcon /> : <RaycastLightIcon />} */}

                <button cmdk-raycast-open-trigger="">
                  <kbd>↵</kbd>
                </button>

                <hr />

                <SubCommand listRef={listRef} selectedValue={value} inputRef={inputRef} />
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
        <Item disabled={!searchInputValue} isCommand={true} onSelect={onSelect} value={ASK_CHATGPT}>
          <i className="gg-girl/0.8 text-mayumi-gray-1200" />
          Ask ChatGPT with <Suggestions>{searchInputValue ?? 'Current search input'}</Suggestions>
        </Item>
        <Item isCommand={true} onSelect={onSelect} value={ASK_CHATGPT_PAGE}>
          <i className="gg-girl/0.8 text-mayumi-gray-1200" />
          Ask ChatGPT with <Suggestions>...</Suggestions>
        </Item>
        <Item isCommand={true} value="Transplate full page">
          <MajesticonsTranslate className="fill-mayumi-gray-1200/1" />
          Tranasplate Page
        </Item>
        <Item isCommand={true} value="Transplate with placeholder">
          <MajesticonsTranslate className="fill-mayumi-gray-1200/1" />
          Tranasplate with `...`
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
        {search ?? 'Waiting for input...'}
      </Item>
    </>
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

function Suggestions(props: React.PropsWithChildren<{}>) {
  return <span className="rounded-lg border border-mayumi-gray-600 bg-mayumi-gray-200 px-2 font-mono text-sm text-mayumi-gray-1100">{props.children}</span>
}

function SubCommand({
  inputRef,
  listRef,
  selectedValue,
}: {
  inputRef: React.RefObject<HTMLInputElement>
  listRef: React.RefObject<HTMLElement>
  selectedValue: string
}) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault()
        setOpen(o => !o)
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  React.useEffect(() => {
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
    <Popover.Root open={open} onOpenChange={setOpen} modal={true}>
      <Popover.Trigger cmdk-raycast-subcommand-trigger="" onClick={() => setOpen(true)} aria-expanded={open}>
        Actions
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </Popover.Trigger>
      <Popover.Content
        side="top"
        align="end"
        className="raycast-submenu"
        sideOffset={16}
        alignOffset={0}
        onCloseAutoFocus={(e) => {
          e.preventDefault()
          inputRef?.current?.focus()
        }}
      >
        <Command>
          <Command.List>
            <Command.Group heading={selectedValue}>
              <SubItem shortcut="↵">
                <WindowIcon />
                Open Application
              </SubItem>
              <SubItem shortcut="⌘ ↵">
                <FinderIcon />
                Show in Finder
              </SubItem>
              <SubItem shortcut="⌘ I">
                <FinderIcon />
                Show Info in Finder
              </SubItem>
              <SubItem shortcut="⌘ ⇧ F">
                <StarIcon />
                Add to Favorites
              </SubItem>
            </Command.Group>
          </Command.List>
          <Command.Input placeholder="Search for actions..." />
        </Command>
      </Popover.Content>
    </Popover.Root>
  )
}

function SubItem({ children, shortcut }: { children: React.ReactNode; shortcut: string }) {
  return (
    <Command.Item>
      {children}
      <div cmdk-raycast-submenu-shortcuts="">
        {shortcut.split(' ').map((key) => {
          return <kbd key={key}>{key}</kbd>
        })}
      </div>
    </Command.Item>
  )
}

function WindowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.25 4.75V3.75C14.25 2.64543 13.3546 1.75 12.25 1.75H3.75C2.64543 1.75 1.75 2.64543 1.75 3.75V4.75M14.25 4.75V12.25C14.25 13.3546 13.3546 14.25 12.25 14.25H3.75C2.64543 14.25 1.75 13.3546 1.75 12.25V4.75M14.25 4.75H1.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FinderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 4.75V6.25M11 4.75V6.25M8.75 1.75H3.75C2.64543 1.75 1.75 2.64543 1.75 3.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H8.75M8.75 1.75H12.25C13.3546 1.75 14.25 2.64543 14.25 3.75V12.25C14.25 13.3546 13.3546 14.25 12.25 14.25H8.75M8.75 1.75L7.08831 7.1505C6.9202 7.69686 7.32873 8.25 7.90037 8.25C8.36961 8.25 8.75 8.63039 8.75 9.09963V14.25M5 10.3203C5 10.3203 5.95605 11.25 8 11.25C10.0439 11.25 11 10.3203 11 10.3203"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.43376 2.17103C7.60585 1.60966 8.39415 1.60966 8.56624 2.17103L9.61978 5.60769C9.69652 5.85802 9.92611 6.02873 10.186 6.02873H13.6562C14.2231 6.02873 14.4665 6.75397 14.016 7.10088L11.1582 9.3015C10.9608 9.45349 10.8784 9.71341 10.9518 9.95262L12.0311 13.4735C12.2015 14.0292 11.5636 14.4777 11.1051 14.1246L8.35978 12.0106C8.14737 11.847 7.85263 11.847 7.64022 12.0106L4.89491 14.1246C4.43638 14.4777 3.79852 14.0292 3.96889 13.4735L5.04824 9.95262C5.12157 9.71341 5.03915 9.45349 4.84178 9.3015L1.98404 7.10088C1.53355 6.75397 1.77692 6.02873 2.34382 6.02873H5.81398C6.07389 6.02873 6.30348 5.85802 6.38022 5.60769L7.43376 2.17103Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
