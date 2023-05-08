import * as RadixDialog from '@radix-ui/react-dialog'
import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { Command } from 'cmdk'
// more about this bugs: https://github.com/whatwg/html/issues/833 and https://github.com/theKashey/react-focus-lock/issues/188
// focus lock used auto focus active element
// import FocusLock from 'react-focus-lock'
import { Input } from 'mayumi/input'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { onMessage, sendMessage } from 'webext-bridge'

import { Item, SubItem } from './commands/common/item'
import { HistoryCommand, HistorySubCommands } from './commands/history'
import { OptionCommand, OptionSubCommands } from './commands/options'
import { SearchTabsCommand, SearchTabsSubCommands } from './commands/search-tabs'
import { StorageCommand, StorageSubCommands } from './commands/storage'
import { SummaryCommand, SummarySubCommands } from './commands/summary'
import { SearchTabsPage } from './pages/search-tabs'
import { MajesticonsTranslate } from '~/components/icons/translate'
import { ExtraOptionsSelector } from '~/components/select'
import { ChatInCommand } from '~/contentScripts/components/chat/in-command'
import { getSearchInputValue } from '~/contentScripts/logic/search-engine'
import {
  actions,
  channels,
  meta,
  OPENAI_API_KEY,
  pages,
} from '~/logic/constants'
import { focusIfNeed, focusManager } from '~/logic/focus-if-need'
import { convertPageToAction, normalizeSubCommandTitle } from '~/logic/normalize'
import {
  useBearStore,
  useCMDKStore,
  useUserConfig,
} from '~/logic/store'

import type { PAGES } from '~/logic/constants'
import type React from 'react'

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
  const [activePages, setActivePages] = useState<Pages[]>([pages.HOME_PAGE])
  const activePage = activePages[activePages.length - 1]
  const [loading, setLoading] = useState(false)
  const { updateOrUpsertConventions } = useBearStore()
  const { open, setOpen, toggle, updateHistoryOpen, setIsChat } = useCMDKStore()

  const popPage = useCallback(() => {
    setActivePages((pages) => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
    setIsChat(false)
    focusManager.callHook('command-input')
  }, [setIsChat])

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

  // TODO: should handle inside each indie command
  // trigger on item select
  // comunication with background
  const handleValueSelect: ItemProps['onSelect'] = useCallback(async (value: string, params) => {
    console.log('handleValueSelect', value, params)
    // change pages..
    if (value.endsWith('-page')) {
      setIsChat(!!meta[value]?.hasChat)
      setActivePages(prev => [...prev, value] as Pages[])
      return
    }
    if (value === actions.ASK_CHATGPT_WITH) {
      setLoading(true)
      await sendMessage(channels.ASK_CHATGPT, { text: params?.text, action: actions.ASK_CHATGPT_WITH }, 'background')
      setLoading(false)
    }
    // Should send all parent message?
    if (value === actions.TRANSLATE_WITH) {
      setLoading(true)
      await sendMessage(channels.ASK_CHATGPT, { text: params?.text, action: actions.TRANSLATE_WITH }, 'background')
      setLoading(false)
    }
    if (value === actions.SUMMARY_WITH) {
      setLoading(true)
      await sendMessage(channels.ASK_CHATGPT, { text: params?.text, action: actions.SUMMARY_WITH }, 'background')
      setLoading(false)
    }
    setValue('')
  }, [setIsChat])
  // Toggle the menu when ⌘j is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && e.metaKey) {
        toggle()
        // Always pop confitg page when modal open/close
        if (activePage === pages.CONFIG_PAGE) {
          popPage()
        }
        updateHistoryOpen(false)
      }

      if (e.key === 'Escape') {
        updateHistoryOpen(false)
      }

      // close modal when press esc on home page
      if (e.key === 'Escape' && activePage === pages.HOME_PAGE && !useCMDKStore.getState().subCommandOpen) {
        setOpen(false)
        return
      }

      // return to home page when press esc
      // focus command input
      if (e.key === 'Escape' && activePage !== pages.HOME_PAGE && !useCMDKStore.getState().subCommandOpen) {
        popPage()
        // focus friendly
        focusManager.callHook('command-input')
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [updateHistoryOpen, activePage, popPage, toggle, setOpen])

  useEffect(() => {
    onMessage(channels.ASK_CHATGPT, (message) => {
      const { data } = message
      updateOrUpsertConventions(data.action, data.message)
    })
  }, [updateOrUpsertConventions])

  focusIfNeed(inputRef, { name: 'command-input' })

  const shouldDisplayChatInput = activePage === pages.TRANSLATE_WITH_PAGE || activePage === pages.ASK_CHATGPT_PAGE || activePage === pages.SUMMARY_WITH_PAGE
  const shouldDisplayInput = !shouldDisplayChatInput
  const shouldDisplayExtraOptions = activePage === pages.TRANSLATE_WITH_PAGE

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
            <Command
              ref={commandRef}
              value={value}
              onValueChange={handleValueChange}
              loop={true}
            >
              <div cmdk-raycast-top-shine="" />
              <div className="flex items-center justify-between px-3 pt-1">
                <div className="flex items-center justify-start gap-2">
                  {activePages.map(p => (
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
                  if (activePage === pages.HOME_PAGE || inputValueRef.current?.length) {
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
                {activePage === pages.HOME_PAGE && <Home onSelect={handleValueSelect} />}
                {activePage === pages.CONFIG_PAGE && <Options onExit={popPage} />}
                {activePage === pages.SEARCH_TABS_PAGE && <SearchTabsPage />}
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
                  page={activePage}
                  onSelect={handleValueSelect}
                />
              </div>
            </Command>
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
  return (
    <>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Commands">
        {/* TODO: create workflow */}
        {/* <Item isCommand={true} value="Create Workflow">
          <i className="gg-add/0.8 text-mayumi-gray-1200" />
          Create workflow
        </Item> */}
        <SearchTabsCommand onSelect={onSelect} />
        <HistoryCommand />
        <StorageCommand />
        <OptionCommand onSelect={onSelect} />
        <Item
          isCommand={true}
          onSelect={() => onSelect(pages.ASK_CHATGPT_PAGE)}
          value={pages.ASK_CHATGPT_PAGE}
        >
          <i className="gg-girl/0.8 text-mayumi-gray-1200" />
          Ask ChatGPT
        </Item>
        <Item
          isCommand={true}
          onSelect={() => onSelect(pages.TRANSLATE_WITH_PAGE)}
          value={pages.TRANSLATE_WITH_PAGE}
        >
          <MajesticonsTranslate className="fill-mayumi-gray-1200/1" />
          Tranasplate
        </Item>
        <SummaryCommand onSelect={onSelect} />
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

// Trigger by k key
function SubCommand({
  inputRef,
  listRef,
  selectedValue,
  onSelect,
  page,
}: {
  inputRef: React.RefObject<HTMLInputElement>
  listRef: React.RefObject<HTMLElement>
  selectedValue: string
  page: string
} & ItemProps) {
  const { subCommandOpen, toggleSubCommand, setSubCommandOpen, isChat } = useCMDKStore()
  const [, setInputValue] = useState<string>()
  const subCommandinputRef = useRef<HTMLInputElement | null>(null)

  // TODO: Extract from meta info
  const hasSubCommand = selectedValue !== pages.HOME_PAGE

  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'k' && e.metaKey) {
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

  if (subCommandOpen) {
    focusIfNeed(subCommandinputRef, { name: 'subcommand-input' })
  }

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
        <kbd>K</kbd>
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
            <Command.Group heading={normalizeSubCommandTitle(selectedValue)?.toUpperCase()}>
              {isChat && <ChatSubCommands page={selectedValue as Pages} />}
              {!isChat && <NonChatSubCommands value={selectedValue} page={page} onSelect={onSelect} />}
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

interface ChatSubCommandsProps {
  page: Pages
}

/**
 * @description Display sub commands on chat page. e.g. (enter) ASK ChatGPT
 */
function ChatSubCommands({ page }: ChatSubCommandsProps) {
  const { newConvention } = useBearStore(state => state)
  const { setSubCommandOpen } = useCMDKStore(state => state)
  return (
    <>
      <SubItem
        value="new-convention"
        onSelect={() => {
          newConvention(convertPageToAction(page))
          setSubCommandOpen(false)
        }}
        shortcut="↵"
      >
        <span className="truncate">New Convention</span>
      </SubItem>
    </>
  )
}

interface NonChatSubCommandsProps extends ItemProps {
  value: string
  page: string
}

/**
 * @description Display sub commands on non-chat page. e.g. Home page
 */
function NonChatSubCommands(props: NonChatSubCommandsProps) {
  if (props.value === actions.OPEN_HISTORY) {
    return <HistorySubCommands />
  }
  if (props.value === actions.CLEAR_STORAGE) {
    return <StorageSubCommands />
  }
  if (props.value === pages.ASK_CHATGPT_PAGE) {
    return <AskGPTSubCommands onSelect={props.onSelect} />
  }
  if (props.value === pages.TRANSLATE_WITH_PAGE) {
    return <TranslateSubCommands onSelect={props.onSelect} />
  }
  if (props.value === pages.CONFIG_PAGE) {
    return <OptionSubCommands onSelect={props.onSelect} />
  }
  if (props.value === pages.SUMMARY_WITH_PAGE) {
    return <SummarySubCommands onSelect={props.onSelect} />
  }
  if (props.page === pages.SEARCH_TABS_PAGE) {
    return <SearchTabsSubCommands />
  }
  return null
}

interface CommonSubCommandItemsProps extends ItemProps {
  page: Pages
}

function CommonSubCommandItems(props: CommonSubCommandItemsProps) {
  const { setSubCommandOpen } = useCMDKStore()
  return (
    <SubItem
      value="open-chat"
      onSelect={() => {
        setSubCommandOpen(false)
        props.onSelect(props.page)
      }}
      shortcut="↵"
    >
      <span className="truncate">Open Chat</span>
    </SubItem>
  )
}

function AskGPTSubCommands({ onSelect }: ItemProps) {
  return (
    <>
      <SubItem
        value="search-input"
        onSelect={() => {
          onSelect(actions.ASK_CHATGPT_WITH, { text: getSearchInputValue() })
        }}
        shortcut="↵"
      >
        <span className="truncate">{getSearchInputValue() ?? 'Search input'}</span>
      </SubItem>
      <CommonSubCommandItems page={pages.ASK_CHATGPT_PAGE} onSelect={onSelect} />
    </>
  )
}

function TranslateSubCommands({ onSelect }: ItemProps) {
  return (
    <>
      {/* TODO: translate selected word */}
      {/* <SubItem value="translate-full-page" onSelect={() => {
        onSelect(TRANSLATE_WITH, { text: getSearchInputValue() })
      }} shortcut="↵">
        <span className="truncate">{'Translate full page'}</span>
      </SubItem> */}
      <CommonSubCommandItems page={pages.TRANSLATE_WITH_PAGE} onSelect={onSelect} />
    </>
  )
}
