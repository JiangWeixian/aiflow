import { useState } from 'react'
import useMeasure from 'react-use-measure'
import { a, useSpring } from '@react-spring/web'
import clsx from 'clsx'

import type { ChatMessage } from '~/logic/openai/types'
import { useBearStore } from '~/logic/store'

const MessageItem = ({ message }: { message: ChatMessage }) => {
  return (
    <div className={clsx('flex gap-4 bg-mayumi-gray-400 p-4 text-mayumi-gray-1200', {
      'bg-mayumi-gray-200': message.role === 'user',
      'bg-mayumi-gray-300': message.role === 'assistant',
    })}>
      <div className="flex-0 h-4 w-4">
        <i className="gg-girl relative top-[4px]" />
      </div>
      <div className="flex-1">
        {message?.text}
      </div>
    </div>
  )
}

export const Chat = () => {
  // const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const { conventions } = useBearStore()
  const [ref, bounds] = useMeasure()
  const [toggle, setToggle] = useState(false)
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

  return (
    <div className="aiflow-chat z-100 leading-1em fixed right-10 bottom-0 m-5 flex select-none flex-col overflow-hidden rounded-lg font-sans shadow-lg">
      <div onClick={() => {
        setToggle(prev => !prev)
      }} className="flex cursor-pointer items-center justify-between bg-mayumi-gray-100 py-3 px-6 text-mayumi-gray-1100">
        <h2 className="text-xl font-bold">
          Chat
        </h2>
        { toggle ? <i className="gg-math-minus" /> : <i className="gg-math-plus" /> }
      </div>
      <a.div ref={ref} style={{ height: props.h, opacity: props.opacity }} className="aiflow-messages w-[400px] max-w-[400px] bg-mayumi-gray-200">
        {conventions.map((message, index) => (
          <MessageItem key={index} message={message} />
        ))}
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
