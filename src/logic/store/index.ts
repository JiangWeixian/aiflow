import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { compact } from 'lodash-es'

import type { ChatMessage } from '~/logic/openai/types'
import { getConvention } from '~/logic/storage'

interface BearState {
  bears: number
  chatOpen: boolean
  conventions: Record<string, Partial<ChatMessage>[]>
  increase: (by: number) => void
  updateChatOpen: (open?: boolean) => void
  toggleChatOpen: () => void
  upsertConventions: (conventionId: string, msg: ChatMessage) => void
  clear: () => void
}

// TODO: replace storage with chrome.storage
export const useBearStore = create<BearState>()(
  devtools(
    persist(
      set => ({
        bears: 0,
        chatOpen: false,
        conventions: {},
        increase: by => set(state => ({ bears: state.bears + by })),
        upsertConventions: async (conventionId: string, msg) => {
          const conventions = await getConvention(msg.id)
          return set(state => ({
            conventions: {
              ...state.conventions,
              [conventionId]: compact(conventions),
            },
          }))
        },
        updateChatOpen: (open) => {
          set(() => ({
            chatOpen: !!open,
          }))
        },
        toggleChatOpen: () => {
          set(state => ({
            chatOpen: !state.chatOpen,
          }))
        },
        clear: () => set({ bears: 0, conventions: {} }),
      }),
      {
        name: 'aiflow-message-store',
      },
    ),
  ),
)
