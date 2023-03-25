import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { compact } from 'lodash-es'
import type { Event } from '~/logic/openai/types'

interface BearState {
  bears: number
  messages: Event[]
  increase: (by: number) => void
  chatresp: (msg: Event) => void
  clear: () => void
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      set => ({
        bears: 0,
        messages: [],
        increase: by => set(state => ({ bears: state.bears + by })),
        chatresp: msg => set(state => ({ messages: compact(state.messages.concat(msg)) })),
        clear: () => set({ bears: 0, messages: [] }),
      }),
      {
        name: 'bear-storage',
      },
    ),
  ),
)
