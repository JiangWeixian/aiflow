import { useState } from 'react'
import { a, config, useSpring } from '@react-spring/web'
import clsx from 'clsx'

import type { ChatMessage } from '~/logic/openai/types'
import { useBearStore, useCMDKStore } from '~/logic/store'
import { MarkdownContent } from '~/components/md'

const MessageItem = ({ message }: { message: Partial<ChatMessage> }) => {
  return (
    <div className={clsx('flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100', {
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
    <a.div style={{ opacity: props.opacity }} className="aiflow-chat leading-1em fixed right-0 bottom-0 z-40 m-5 flex max-w-[500px] flex-col overflow-hidden rounded-lg border border-mayumi-gray-700 bg-mayumi-gray-200 font-sans shadow-lg">
      <div
        onClick={() => {
          toggleHistoryOpen()
        }}
        className={
          clsx(
            'flex-0 flex cursor-pointer select-none items-center justify-between border-mayumi-gray-700 p-3 text-mayumi-gray-1100 hover:bg-mayumi-gray-400',
            {
              'border-b-0': !historyOpen,
              'border-b': historyOpen,
            },
          )}
      >
        <h2 className="rounded-md bg-transparent px-3 py-1 text-sm font-bold uppercase">
          History
        </h2>
        { historyOpen && <kbd className="flex h-5 items-center justify-center rounded bg-mayumi-gray-300 px-2 font-sans text-xs uppercase text-mayumi-gray-1100">esc</kbd> }
      </div>
      <a.div style={{ height: props.h, width: props.w }} className="flex">
        {/* conventions chats list */}
        <div className="grid min-w-[150px] grid-flow-row auto-rows-max border-r border-mayumi-gray-700 p-2 font-semibold">
          {conventionIds.map((id) => {
            return (
              <div
                className={
                  clsx(
                    'flex items-center rounded-md py-2 px-3 text-sm hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200',
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
        <div className="aiflow-messages flex-1 overflow-auto bg-mayumi-gray-300">
          {messages.map((message, index) => (
            <MessageItem key={index} message={message} />
          ))}
        </div>
      </a.div>
    </a.div>
  )
}
