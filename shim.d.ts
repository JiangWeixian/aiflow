import type { ACTIONS, channels } from '~/logic/constants'
import type { ChatMessage } from '~/logic/openai/types'
import type { ProtocolWithReturn } from 'webext-bridge'

declare module 'webext-bridge' {
  export interface ProtocolMap {
    // define message protocol types
    // see https://github.com/antfu/webext-bridge#type-safe-protocols
    'tab-prev': { title: string | undefined }
    'get-current-tab': ProtocolWithReturn<{ tabId: number | string }, { title: string }>
    'test': ProtocolWithReturn<{ value: string }, { message: ChatMessage }>
    // message is ChatMessage typo
    [channels.ASK_CHATGPT]: ProtocolWithReturn<{ text?: string; action: ACTIONS; message?: any; tabId?: number }, { message: any }>
    [channels.QUERY_TABS]: ProtocolWithReturn<{ active?: boolean }, { tabs: any }>
    [channels.UPATE_TABS]: ProtocolWithReturn<{ tabId?: number; active?: boolean }, { tab: any; error?: string }>
  }
}
