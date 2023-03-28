import { useState } from 'react'
import { a, useSpring } from '@react-spring/web'
import clsx from 'clsx'

import type { ChatMessage } from '~/logic/openai/types'
import { useBearStore } from '~/logic/store'

const MessageItem = ({ message }: { message: Partial<ChatMessage> }) => {
  return (
    <div className={clsx('flex flex-col gap-2 p-4 text-sm text-mayumi-gray-1100', {
      'bg-mayumi-gray-200': message.role === 'user',
      'bg-mayumi-gray-300': message.role === 'assistant',
    })}>
      <div className="flex-0 text-mayumi-gray-1200">
        { message.role === 'user' ? 'You:' : 'Assistant:' }
      </div>
      <div className="flex-1">
        {message?.text}
      </div>
    </div>
  )
}

export const Chat = () => {
  // const [input, setInput] = useState('')
  const { conventions } = useBearStore()
  const [toggle, setToggle] = useState(false)
  const [activeConventionId, setActiveConventionId] = useState<string | null>(null)
  const props = useSpring({ h: toggle ? 600 : 0, opacity: toggle ? 1 : 0 })

  // const sendMessage = () => {
  //   if (input) {
  //     const message: Message = {
  //       content: input,
  //       sender: 'me',
  //       timestamp: Date.now(),
  //     }
  //     setMessages([...messages, message])
  //     setInput('')
  //   }
  // }

  console.log(conventions)
  const conventionIds = Object.keys(conventions)
  const controlledActiveConventionId = activeConventionId || conventionIds[0]
  const messages: Partial<ChatMessage>[] = !controlledActiveConventionId ? [] : conventions[controlledActiveConventionId]

  return (
    <div className="aiflow-chat z-100 leading-1em fixed right-10  bottom-0 m-5 flex select-none flex-col overflow-hidden rounded-lg border border-mayumi-gray-700 bg-mayumi-gray-200 font-sans shadow-lg">
      <div
        onClick={() => {
          setToggle(prev => !prev)
        }}
        className={
          clsx(
            'flex cursor-pointer items-center justify-between border-mayumi-gray-700 p-3 text-mayumi-gray-1100 hover:bg-mayumi-gray-400',
            {
              'border-b-0': !toggle,
              'border-b': toggle,
            },
          )}
        >
        <h2 className="rounded-md bg-mayumi-gray-700 px-3 py-1 text-xs uppercase shadow">
          Chat
        </h2>
        { toggle ? <i className="gg-math-minus/0.8 text-mayumi-gray-700" /> : <i className="gg-math-plus/0.8 text-mayumi-gray-700" /> }
      </div>
      <a.div style={{ height: props.h, opacity: props.opacity }} className="flex">
        {/* conventions chats list */}
        <div className="grid grid-flow-row auto-rows-max border-r border-mayumi-gray-700 p-2 font-semibold">
          {conventionIds.map((id) => {
            return (
              <div
                className="flex items-center rounded-md bg-mayumi-gray-200 py-2 px-3 text-sm text-mayumi-gray-1100 hover:bg-mayumi-blue-400 hover:text-mayumi-gray-1200"
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
        <div className="aiflow-messages w-[400px] max-w-[400px] bg-mayumi-gray-300">
          {messages.map((message, index) => (
            <MessageItem key={index} message={message} />
          ))}
        </div>
      </a.div>
      {/* <div className="input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div> */}
    </div>
  )
}
