import * as ScrollArea from '@radix-ui/react-scroll-area'
import clsx from 'clsx'
import {
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'
import { onMessage } from 'webext-bridge'

import { MarkdownContent } from '~/components/md'
import { ASK_CHATGPT } from '~/logic/constants'
import { useBearStore } from '~/logic/store'

import type { ChatMessage } from '~/logic/openai/types'

const MessageItem = memo(({ message }: { message: Partial<ChatMessage> }) => {
  return (
    <div className={clsx('text-mayumi-gray-1100 flex flex-col gap-2 p-4 text-sm', {
      'bg-mayumi-gray-200': message.role === 'user',
      'bg-mayumi-gray-300': message.role === 'assistant',
    })}
    >
      <div className="flex-0 text-mayumi-gray-1200 rounded-md">
        { message.role === 'user' ? 'You:' : 'Assistant:' }
      </div>
      <div className="flex-1 rounded-md">
        <MarkdownContent content={message.text} />
      </div>
    </div>
  )
}, (p, n) => p.message.text === n.message.text)

MessageItem.displayName = 'MessageItem'

interface ChatInCommandProps {
  /**
   * Equal action name
   */
  action: string
}

export const ChatInCommand = (props: ChatInCommandProps) => {
  const listRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { conventions, updateOrUpsertConventions } = useBearStore()
  const [activeConventionId] = useState<string | null>(props.action)

  const messages: Partial<ChatMessage>[] = conventions[activeConventionId!] ?? []
  function scrollIntoView() {
    const lastIndex = (listRef.current?.children.length ?? 1) - 1
    if (listRef.current?.children[lastIndex] && messagesEndRef.current) {
      // Maybe last element not visiable yet
      setTimeout(() => {
        scrollIntoViewIfNeeded(messagesEndRef.current!, { behavior: 'smooth', scrollMode: 'if-needed' })
      }, 80)
    }
  }
  useBearStore.subscribe((current, prev) => {
    if (prev.conventions[activeConventionId!]?.length !== current.conventions[activeConventionId!]?.length) {
      scrollIntoView()
    }
  })

  useEffect(() => {
    onMessage(ASK_CHATGPT, (message) => {
      const { data } = message
      updateOrUpsertConventions(data.action, data.message)
    })
    scrollIntoView()
  }, [updateOrUpsertConventions])
  return (
    <div className="aiflow-chat-in-command bg-mayumi-gray-200 flex-1">
      <ScrollArea.Root className="pointer-events-auto h-[400px] overflow-hidden pt-2">
        <ScrollArea.Viewport className="h-full w-full rounded">
          <div ref={listRef}>
            {messages.map(message => (
              <MessageItem key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="flex touch-none select-none bg-transparent p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-transparent before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  )
}
