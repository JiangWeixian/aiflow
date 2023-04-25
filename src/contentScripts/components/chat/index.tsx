import {
  a,
  config,
  useSpring,
} from '@react-spring/web'
import clsx from 'clsx'
import { useState } from 'react'

import { MarkdownContent } from '~/components/md'
import { useBearStore, useCMDKStore } from '~/logic/store'

import type { ChatMessage } from '~/logic/openai/types'

const MessageItem = ({ message }: { message: Partial<ChatMessage> }) => {
  return (
    <div className={clsx('text-mayumi-gray-1100 flex flex-col gap-2 p-4 text-sm', {
      'bg-mayumi-gray-200': message.role === 'user',
      'bg-mayumi-gray-300': message.role === 'assistant',
    })}
    >
      <div className="flex-0 text-mayumi-gray-1200">
        { message.role === 'user' ? 'You:' : 'Assistant:' }
      </div>
      <div className="flex-1">
        <MarkdownContent content={message.text} />
      </div>
    </div>
  )
}

// FIXME: Wrap it with popover content, prevent scrolling on body
export const Chat = () => {
  const { toggleHistoryOpen, historyOpen } = useCMDKStore()
  const { conventions } = useBearStore()
  const [activeConventionId, setActiveConventionId] = useState<string | null>(null)
  const props = useSpring({
    h: historyOpen ? 600 : 0,
    w: historyOpen ? 500 : 150,
    opacity: historyOpen ? 1 : 0,
    config: config.default,
  })

  const conventionIds = Object.keys(conventions)
  const controlledActiveConventionId = activeConventionId || conventionIds[0]
  const messages: Partial<ChatMessage>[] = !controlledActiveConventionId ? [] : conventions[controlledActiveConventionId]

  return (
    <a.div style={{ opacity: props.opacity }} className="aiflow-chat leading-1em border-mayumi-gray-700 bg-mayumi-gray-200 fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border font-sans shadow-lg">
      <div
        onClick={() => {
          toggleHistoryOpen()
        }}
        className={
          clsx(
            'flex-0 border-mayumi-gray-700 text-mayumi-gray-1100 hover:bg-mayumi-gray-400 flex cursor-pointer select-none items-center justify-between p-3',
            {
              'border-b-0': !historyOpen,
              'border-b': historyOpen,
            },
          )}
      >
        <h2 className="rounded-md bg-transparent px-3 py-1 text-sm font-bold uppercase">
          History
        </h2>
        { historyOpen && <kbd className="bg-mayumi-gray-300 text-mayumi-gray-1100 flex h-5 items-center justify-center rounded px-2 font-sans text-xs uppercase">esc</kbd> }
      </div>
      <a.div style={{ height: props.h, width: props.w }} className="flex">
        {/* conventions chats list */}
        <div className="border-mayumi-gray-700 grid min-w-[150px] grid-flow-row auto-rows-max border-r p-2 font-semibold">
          {conventionIds.map((id) => {
            return (
              <div
                className={
                  clsx(
                    'hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200 flex items-center rounded-md py-2 px-3 text-sm',
                    {
                      'bg-mayumi-blue-400 text-mayumi-gray-1200': id === controlledActiveConventionId,
                      'bg-mayumi-gray-200 text-mayumi-gray-1100': id !== controlledActiveConventionId,
                    },
                  )
                }
                key={id}
                onClick={() => {
                  setActiveConventionId(id)
                }}
              >
                <a className="cursor-pointer uppercase">{id}</a>
              </div>
            )
          })}
        </div>
        <div className="aiflow-messages bg-mayumi-gray-300 flex-1 overflow-auto">
          {messages.map((message, index) => (
            <MessageItem key={index} message={message} />
          ))}
        </div>
      </a.div>
    </a.div>
  )
}
