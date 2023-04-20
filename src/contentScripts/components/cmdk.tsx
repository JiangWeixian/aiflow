import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as RadixDialog from '@radix-ui/react-dialog'
import { Command, useCommandState } from 'cmdk'
import { sendMessage } from 'webext-bridge'
// more about this bugs: https://github.com/whatwg/html/issues/833 and https://github.com/theKashey/react-focus-lock/issues/188
// focus lock used auto focus active element
// import FocusLock from 'react-focus-lock'
import { Input } from 'mayumi/input'
import clsx from 'clsx'

import { useBearStore, useCMDKStore, useUserConfig } from '~/logic/store'
import type { PAGES } from '~/logic/constants'
import { ASK_CHATGPT, ASK_CHATGPT_PAGE, ASK_CHATGPT_WITH, CONFIG_PAGE, HOME_PAGE, OPENAI_API_KEY, SUMMARY_WITH, TRANSLATE_WITH, TRANSLATE_WITH_PAGE } from '~/logic/constants'
import { getSearchInputValue } from '~/contentScripts/logic/search-engine'
import { MajesticonsTranslate } from '~/components/icons/translate'
import { ExtraOptionsSelector } from '~/components/select'
import { ReactComponent as Trash } from '~/components/icons/trash.svg'
import { ReactComponent as ReadMe } from '~/components/icons/readme.svg'
import { ReactComponent as OptionsIcon } from '~/components/icons/options.svg'
import { createMessageStore } from '~/logic/openai/message-store'
import { ChatInCommand } from '~/contentScripts/components/chat/in-command'
import { convertPageToAction } from '~/logic/normalize'
import { focusIfNeed, focusManager } from '~/logic/focus-if-need'
import { convertHtmlToMd } from '~/logic/md'

const messageStore = createMessageStore()

interface ItemProps {
  onSelect: (type: string, params?: { text?: string }) => void
}

type Pages = PAGES

// Trigger ⌘j
export function CMDK() {
  // which command
  const [value, setValue] = useState('')
  // used for switch different page
  const inputValueRef = useRef<string>()
  const containerRef = useRef<HTMLDivElement>(null)
  const commandRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const listRef = useRef(null)
  const [pages, setPages] = useState<Pages[]>([HOME_PAGE])
  const activePage = pages[pages.length - 1]
  const [loading, setLoading] = useState(false)
  const { upsertConventions } = useBearStore()
  const { open, setOpen, toggle, updateChatOpen } = useCMDKStore()

  const popPage = useCallback(() => {
    setPages((pages) => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
    focusManager.callHook('command-input')
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
  // comunication with background
  const handleValueSelect: ItemProps['onSelect'] = useCallback(async (value: string, params) => {
    console.log('handleValueSelect', value, params)
    // change pages..
    if (value.endsWith('-page')) {
      setPages(prev => [...prev, value] as Pages[])
      return
    }
    if (value === ASK_CHATGPT_WITH) {
      setLoading(true)
      await sendMessage(ASK_CHATGPT, { text: params?.text, action: ASK_CHATGPT_WITH }, 'background')
      setLoading(false)
    }
    // Should send all parent message?
    if (value === TRANSLATE_WITH) {
      setLoading(true)
      await sendMessage(ASK_CHATGPT, { text: params?.text, action: TRANSLATE_WITH }, 'background')
      // upsertConventions(TRANSLATE_WITH, data.message)
      setLoading(false)
    }
    if (value === SUMMARY_WITH) {
      const text = await convertHtmlToMd(document.body)
      const data = await sendMessage(ASK_CHATGPT, { text, action: SUMMARY_WITH }, 'background')
      upsertConventions(SUMMARY_WITH, data.message)
    }
    setValue('')
  }, [upsertConventions])
  // Toggle the menu when ⌘j is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && e.metaKey) {
        toggle()
        // Always pop confitg page when modal open/close
        if (activePage === CONFIG_PAGE) {
          popPage()
        }
        updateChatOpen(false)
      }

      // close modal when press esc on home page
      if (e.key === 'Escape' && activePage === HOME_PAGE && !useCMDKStore.getState().subCommandOpen) {
        setOpen(false)
        updateChatOpen(false)
        return
      }

      // return to home page when press esc
      // focus command input
      // FIXME: subcommand input will affect command input, exit subcommand panel unable focus command.input. maybe related to focus-lock
      if (e.key === 'Escape' && activePage !== HOME_PAGE) {
        popPage()
        // focus friendly
        setTimeout(() => {
          inputRef.current?.focus()
        }, 100)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [updateChatOpen, activePage, popPage, toggle, setOpen])
  focusIfNeed(inputRef, { name: 'command-input' })

  const shouldDisplayInput = activePage === HOME_PAGE
  const shouldDisplayChatInput = activePage === TRANSLATE_WITH_PAGE || activePage === ASK_CHATGPT_PAGE
  const shouldDisplayExtraOptions = activePage === TRANSLATE_WITH_PAGE

  return (
    <>
      <RadixDialog.Root open={open}>
        <RadixDialog.Portal container={containerRef.current}>
          {/* https://github.com/radix-ui/primitives/issues/1159 -- Overlay will break scroll */}
          {/* <RadixDialog.Overlay cmdk-overlay="" className="fixed top-0 left-0 z-0 h-screen w-screen backdrop-blur-sm" /> */}
          <RadixDialog.Content
            cmdk-dialog=""
            className="z-50 shadow-lg"
          >
            {/* <FocusLock> */}
            <Command
              ref={commandRef}
              value={value}
              onValueChange={handleValueChange}
              loop={true}
            >
              <div cmdk-raycast-top-shine="" />
              <div className="flex items-center justify-between px-3 pt-1">
                <div className="flex items-center justify-start gap-2">
                  {pages.map(p => (
                    <div
                      key={p}
                      className="rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase text-mayumi-gray-1100 shadow"
                    >
                      {convertPageToAction(p)}
                    </div>
                  ))}
                </div>
                {shouldDisplayExtraOptions && <ExtraOptionsSelector container={containerRef} />}
              </div>
              <Command.Input
                ref={(v) => {
                  inputRef.current = v
                }}
                onValueChange={(v) => {
                  inputValueRef.current = v
                }}
                key="cmdk-input"
                autoFocus={true}
                tabIndex={1}
                className={clsx({ hidden: !shouldDisplayInput })}
                placeholder="Search for commands..."
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter') {
                    bounce()
                  }
                  if (activePage === HOME_PAGE || inputValueRef.current?.length) {
                    return
                  }
                  if (e.key === 'Backspace') {
                    e.preventDefault()
                    popPage()
                    bounce()
                  }
                }}
              />
              {shouldDisplayInput && <hr cmdk-raycast-loader="" />}
              <Command.List
                className="min-h-[400px]"
                ref={listRef}
              >
                {activePage === HOME_PAGE && <Home onSelect={handleValueSelect} />}
                {activePage === CONFIG_PAGE && <Options onExit={popPage} />}
                {shouldDisplayChatInput && <Chat page={activePage} />}
              </Command.List>
              <div
                cmdk-raycast-footer=""
                className="justify-end"
              >
                {shouldDisplayChatInput && (
                  <ChatInput
                    page={activePage}
                    onSendMessage={handleValueSelect}
                  />
                )}
                {shouldDisplayChatInput && loading && <i className="spinner gg-spinner/0.75" />}
                <button
                  tabIndex={2}
                  cmdk-raycast-open-trigger=""
                >
                  <kbd>↵</kbd>
                </button>

                <hr />

                <SubCommand
                  listRef={listRef}
                  selectedValue={value}
                  inputRef={inputRef}
                  onSelect={handleValueSelect}
                />
              </div>
            </Command>
            {/* </FocusLock> */}
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
      <div
        id="aiflow-dialog-container"
        className="raycast fixed top-0 left-0"
        ref={containerRef}
      />
    </>
  )
}

// Main page
// Command list
function Home({ onSelect }: ItemProps) {
  const { clear } = useBearStore()
  const { updateChatOpen, setOpen } = useCMDKStore()
  return (
    <>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Commands">
        {/* TODO: create workflow */}
        {/* <Item isCommand={true} value="Create Workflow">
          <i className="gg-add/0.8 text-mayumi-gray-1200" />
          Create workflow
        </Item> */}
        <Item
          isCommand={true}
          value="open-convenstions-history"
          onSelect={() => {
            setOpen(false)
            updateChatOpen(true)
          }}
        >
          <ReadMe />
          View History
        </Item>
        <Item
          isCommand={true}
          value="clear-storage"
          onSelect={() => {
            clear()
            messageStore.clear()
          }}
        >
          <Trash />
          Clear Storage
        </Item>
        <Item
          isCommand={true}
          onSelect={() => onSelect(CONFIG_PAGE)}
          value={CONFIG_PAGE}
        >
          <OptionsIcon />
          Config
        </Item>
        <Item
          isCommand={true}
          onSelect={() => onSelect(ASK_CHATGPT_PAGE)}
          value={ASK_CHATGPT_PAGE}
        >
          <i className="gg-girl/0.8 text-mayumi-gray-1200" />
          Ask ChatGPT
        </Item>
        <Item
          isCommand={true}
          onSelect={() => onSelect(TRANSLATE_WITH_PAGE)}
          value={TRANSLATE_WITH_PAGE}
        >
          <MajesticonsTranslate className="fill-mayumi-gray-1200/1" />
          Tranasplate
        </Item>
        <Item
          isCommand={true}
          value={SUMMARY_WITH}
        >
          <i className="gg-notes/0.8 text-mayumi-gray-1200" />
          Summary
        </Item>
      </Command.Group>
    </>
  )
}

interface OptionsProps {
  onExit: () => void
}

// Options page
function Options(props: OptionsProps) {
  const config = useUserConfig()
  return (
    <div className="flex flex-col items-center justify-center p-4 pt-8">
      <Input
        light={true}
        className="w-1/2"
        value={config.OPENAI_API_KEY}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            config.set({ [OPENAI_API_KEY]: e.currentTarget.value })
            props.onExit?.()
          }
          return false
        }}
      />
    </div>
  )
}

// Chat page

interface ChatProps {
  page: Pages
}
function Chat(props: ChatProps) {
  return (
    <ChatInCommand action={convertPageToAction(props.page)} />
  )
}

interface ChatInputProps {
  onSendMessage: ItemProps['onSelect']
  page: Pages
}

function ChatInput(props: ChatInputProps) {
  const [value, setValue] = useState('')
  // 输入法标识
  const invokeInputMethodEditor = useRef(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const inputValueRef = useRef<string>('')
  const handleSendMessageToChat = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && invokeInputMethodEditor.current === false) {
      e.preventDefault()
      const action = convertPageToAction(props.page)
      props.onSendMessage(action, { text: inputValueRef.current })
      inputValueRef.current = ''
      inputRef.current!.value = ''
      setValue('')
      console.log('ChatInput', inputRef.current)
    }
  }
  focusIfNeed(inputRef, { name: 'chat-input' })
  return (
    <Input
      tabIndex={1}
      value={value}
      ghost={true}
      placeholder="Type your message..."
      key="cmdk-ai-input"
      onCompositionStart={() => {
        invokeInputMethodEditor.current = true
      }}
      onCompositionEnd={() => {
        invokeInputMethodEditor.current = false
      }}
      ref={inputRef}
      onChange={(e) => {
        setValue(e.target.value)
        inputValueRef.current = e.target.value
      }}
      onKeyDown={handleSendMessageToChat}
    />
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
  const { subCommandOpen, toggleSubCommand, setSubCommandOpen } = useCMDKStore()
  const [, setInputValue] = useState<string>()
  const subCommandinputRef = useRef<HTMLInputElement | null>(null)

  const hasSubCommand = selectedValue !== HOME_PAGE

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'm' && e.metaKey) {
        e.preventDefault()
        hasSubCommand && toggleSubCommand()
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [hasSubCommand, toggleSubCommand, setSubCommandOpen, inputRef])

  useEffect(() => {
    const el = listRef.current

    if (!el) {
      return
    }

    if (subCommandOpen) {
      el.style.overflow = 'hidden'
    } else {
      el.style.overflow = ''
    }
  }, [subCommandOpen, listRef])

  return (
    <Popover.Root
      open={subCommandOpen}
      onOpenChange={(v) => {
        if (!hasSubCommand) {
          return
        }
        setSubCommandOpen(v)
      }}
      modal={true}
    >
      <Popover.Trigger
        tabIndex={3}
        disabled={!hasSubCommand}
        cmdk-raycast-subcommand-trigger=""
        onClick={() => {
          setSubCommandOpen(true)
        }}
        aria-expanded={subCommandOpen}
      >
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
        onEscapeKeyDown={() => {
          setSubCommandOpen(false)
        }}
        onCloseAutoFocus={(e) => {
          // prevent focus trigger after close
          e.preventDefault()
          inputRef?.current?.focus()
        }}
      >
        <Command
          loop={true}
          shouldFilter={false}
        >
          <Command.List>
            <Command.Group heading={selectedValue?.toUpperCase()}>
              {selectedValue === ASK_CHATGPT_WITH && <AskGPTSubCommands onSelect={onSelect} />}
              {selectedValue === TRANSLATE_WITH && <TranslateSubCommands onSelect={onSelect} />}
              {selectedValue === SUMMARY_WITH && <SummarySubCommands onSelect={onSelect} />}
            </Command.Group>
          </Command.List>
          <Command.Input
            autoFocus={true}
            onValueChange={setInputValue}
            ref={subCommandinputRef}
            placeholder="Search for actions..."
          />
        </Command>
      </Popover.Content>
    </Popover.Root>
  )
}

function AskGPTSubCommands({ onSelect }: ItemProps) {
  const { search } = useCommandState(state => state)
  return (
    <>
      <SubItem
        value="search-input"
        onSelect={() => {
          onSelect(ASK_CHATGPT_WITH, { text: getSearchInputValue() })
        }}
        shortcut="↵"
      >
        <span className="truncate">{getSearchInputValue() ?? 'Search input'}</span>
      </SubItem>
      <SubItem
        onSelect={() => {
          onSelect(ASK_CHATGPT_WITH, { text: search })
        }}
        value={search || '...'}
        shortcut="⌘ ↵"
      >
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
      <SubItem
        onSelect={() => {
          onSelect(TRANSLATE_WITH, { text: search })
        }}
        value={search || '...'}
        shortcut="⌘ ↵"
      >
        <span className="truncate">{search || '...'}</span>
      </SubItem>
    </>
  )
}

function SummarySubCommands({ onSelect }: ItemProps) {
  const { search } = useCommandState(state => state)
  return (
    <>
      <SubItem
        onSelect={() => {
          onSelect(SUMMARY_WITH, { text: search })
        }}
        value={search || '...'}
        shortcut="⌘ ↵"
      >
        <span className="truncate">{'Summary full page'}</span>
      </SubItem>
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
    <Command.Item
      disabled={disabled}
      value={value}
      onSelect={onSelect}
    >
      {children}
      <span cmdk-raycast-meta="">{isCommand ? 'Command' : 'Application'}</span>
    </Command.Item>
  )
}

function SubItem({ children, shortcut, value, onSelect }: { children: React.ReactNode; shortcut: string; value?: string } & ItemProps) {
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
