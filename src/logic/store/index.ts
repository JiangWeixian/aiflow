import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { compact } from 'lodash-es'

import type { ChatMessage } from '~/logic/openai/types'
import { getConvention } from '~/logic/storage'

interface BearState {
  bears: number
  conventions: ChatMessage[]
  increase: (by: number) => void
  upsertConventions: (msg: ChatMessage) => void
  clear: () => void
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      set => ({
        bears: 0,
        conventions: [],
        increase: by => set(state => ({ bears: state.bears + by })),
        upsertConventions: async (msg) => {
          const conventions = await getConvention(msg.id)
          set(() => ({ conventions: compact(conventions) }))
        },
        clear: () => set({ bears: 0, conventions: [] }),
      }),
      {
        name: 'aiflow-chat-storage',
      },
    ),
  ),
)
