import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { compact } from 'lodash-es'

import type { ChatMessage } from '~/logic/openai/types'
import { getConvention } from '~/logic/storage'

interface BearState {
  bears: number
  conventions: Record<string, Partial<ChatMessage>[]>
  increase: (by: number) => void
  upsertConventions: (conventionId: string, msg: ChatMessage) => void
  clear: () => void
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      set => ({
        bears: 0,
        conventions: {},
        increase: by => set(state => ({ bears: state.bears + by })),
        upsertConventions: async (conventionId: string, msg) => {
          const conventions = await getConvention(msg.id)
          set(state => ({
            conventions: {
              ...state.conventions,
              [conventionId]: compact(conventions),
            },
          }))
        },
        clear: () => set({ bears: 0, conventions: {} }),
      }),
      {
        name: 'aiflow-chat-storage',
      },
    ),
  ),
)
