// refs: https://github.com/wong2/chatgpt-google-extension/blob/main/src/background/fetch-sse.ts
// refs: https://github.com/transitive-bullshit/chatgpt-api/blob/main/src/chatgpt-api.ts
import { fetchSSE } from './fetch-sse'
import type { ChatGPTAPIOptions, ChatMessage, Provider, SendMessageOptions, openai } from './types'
import { v4 as uuidv4 } from 'uuid'

const USER_LABEL_DEFAULT = 'User'
const ASSISTANT_LABEL_DEFAULT = 'ChatGPT'
const CHATGPT_MODEL = 'gpt-3.5-turbo'

export class OpenAIProvider implements Provider {
  token: string
  _systemMessage?: string
  _completionParams?: Omit<
    openai.CreateChatCompletionRequest,
    'messages' | 'n'
  >

  constructor(private model = CHATGPT_MODEL, { systemMessage, completionParams = {}, apiKey }: ChatGPTAPIOptions) {
    this.token = apiKey
    this.model = model
    this._systemMessage = systemMessage
    this._completionParams = {
      model: this.model,
      temperature: 0.8,
      top_p: 1.0,
      presence_penalty: 1.0,
      ...completionParams,
    }
  }

  protected async _buildMessages(text: string, opts: SendMessageOptions) {
    const { systemMessage = this._systemMessage } = opts
    const { parentMessageId } = opts

    const userLabel = USER_LABEL_DEFAULT
    const assistantLabel = ASSISTANT_LABEL_DEFAULT

    // TODO
    // const maxNumTokens = this._maxModelTokens - this._maxResponseTokens
    let messages: openai.ChatCompletionRequestMessage[] = []

    if (systemMessage) {
      messages.push({
        role: 'system',
        content: systemMessage,
      })
    }

    const systemMessageOffset = messages.length
    const nextMessages = text
      ? messages.concat([
        {
          role: 'user',
          content: text,
          name: opts.name,
        },
      ])
      : messages
    const numTokens = 0

    do {
      const prompt = nextMessages
        .reduce((prompt, message) => {
          switch (message.role) {
            case 'system':
              return prompt.concat([`Instructions:\n${message.content}`])
            case 'user':
              return prompt.concat([`${userLabel}:\n${message.content}`])
            default:
              return prompt.concat([`${assistantLabel}:\n${message.content}`])
          }
        }, [] as string[])
        .join('\n\n')

      // const nextNumTokensEstimate = await this._getTokenCount(prompt)
      // const isValidPrompt = nextNumTokensEstimate <= maxNumTokens
      const isValidPrompt = true

      if (prompt && !isValidPrompt) {
        break
      }

      messages = nextMessages
      // numTokens = nextNumTokensEstimate

      if (!isValidPrompt) {
        break
      }

      if (!parentMessageId) {
        break
      }

      // TODO: implement this._getMessageById, need for convetion chat
      // const parentMessage = await this._getMessageById(parentMessageId)
      // if (!parentMessage) {
      //   break
      // }

      // const parentMessageRole = parentMessage.role || 'user'

      // nextMessages = nextMessages.slice(0, systemMessageOffset).concat([
      //   {
      //     role: parentMessageRole,
      //     content: parentMessage.text,
      //     name: parentMessage.name,
      //   },
      //   ...nextMessages.slice(systemMessageOffset),
      // ])

      // parentMessageId = parentMessage.parentMessageId
    } while (true)

    return { messages }

    // TODO:
    // Use up to 4096 tokens (prompt + response), but try to leave 1000 tokens
    // for the response.
    // const maxTokens = Math.max(
    //   1,
    //   Math.min(this._maxModelTokens - numTokens, this._maxResponseTokens),
    // )

    // return { messages, maxTokens, numTokens }
  }

  async sendMessage(text: string, params: SendMessageOptions) {
    const { messages } = await this._buildMessages(text, params)
    const result: ChatMessage = {
      role: 'assistant',
      id: uuidv4(),
      // parentMessageId: messageId,
      text: '',
    }
    await fetchSSE('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      signal: params.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        ...this._completionParams,
        messages,
        stream: true,
        max_tokens: 2048,
      }),
      onMessage(message) {
        console.debug('sse message', message)
        if (message === '[DONE]') {
          params.onEvent({ type: 'done' })
          return
        }

        try {
          const response: openai.CreateChatCompletionDeltaResponse
            = JSON.parse(message)

          if (response.id) {
            result.id = response.id
          }

          if (response?.choices?.length) {
            const delta = response.choices[0].delta
            result.delta = delta.content
            if (delta?.content) {
              result.text += delta.content
            }
            result.detail = response

            if (delta.role) {
              result.role = delta.role
            }

            params.onEvent?.({ type: 'answer', data: result })
          }
        } catch (err) {
          console.error(err)
        }
      },
    })
    return {}
  }
}
