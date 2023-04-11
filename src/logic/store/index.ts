import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { compact } from 'lodash-es'
import { local } from '@jiangweixian1994/zustand-middlwares/storage'
import { logger } from '@jiangweixian1994/zustand-middlwares/devtools'

import type { ChatMessage } from '~/logic/openai/types'
import { getConvention } from '~/logic/conventions'

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

export const useBearStore = create<BearState>()(
  logger(
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
          }), false, 'upsertConventions')
        },
        updateChatOpen: (open) => {
          set(() => ({
            chatOpen: !!open,
          }))
        },
        toggleChatOpen: () => {
          set(state => ({
            chatOpen: !state.chatOpen,
          }), false, 'toggleChatOpen')
        },
        clear: () => set({ bears: 0, conventions: {} }),
      }),
      {
        name: 'aiflow-message-store',
        storage: createJSONStorage(() => local),
      },
    ),
    {
      name: 'aiflow-message-store',
    },
  ),
)
