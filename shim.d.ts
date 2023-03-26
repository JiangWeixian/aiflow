import type { ProtocolWithReturn } from 'webext-bridge'
import type { ChatMessage } from '~/logic/openai/types'
import type { ASK_CHATGPT } from '~/logic/constants'

declare module 'webext-bridge' {
  export interface ProtocolMap {
    // define message protocol types
    // see https://github.com/antfu/webext-bridge#type-safe-protocols
    'tab-prev': { title: string | undefined }
    'get-current-tab': ProtocolWithReturn<{ tabId: number | string }, { title: string }>
    'test': ProtocolWithReturn<{ value: string }, { message: ChatMessage }>
    // message is ChatMessage typo
    [ASK_CHATGPT]: ProtocolWithReturn<{ text?: string }, { message: any }>
  }
}
