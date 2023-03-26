import { createMessageStore } from './openai/message-store'
import type { ChatMessage } from './openai/types'

const messageStore = createMessageStore()

export const getConvention = async (id: string) => {
  let nextMessages: Partial<ChatMessage>[] = []
  let parentMessageId = id
  const systemMessageOffset = 0
  console.log(await messageStore.getAll())
  do {
    if (!parentMessageId) {
      break
    }

    const parentMessage: ChatMessage = await messageStore.get(parentMessageId)
    if (!parentMessage) {
      break
    }

    const parentMessageRole = parentMessage.role || 'user'

    nextMessages = nextMessages.slice(0, systemMessageOffset).concat([
      {
        role: parentMessageRole,
        text: parentMessage.text,
        name: parentMessage.name,
      },
      ...nextMessages.slice(systemMessageOffset),
    ])

    parentMessageId = parentMessage.parentMessageId
  } while (true)
  return nextMessages
}
