import { create } from 'zustand'
import type { StateStorage } from 'zustand/middleware'
import { createJSONStorage, persist } from 'zustand/middleware'
import { compact } from 'lodash-es'
import browsers from 'webextension-polyfill'

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

const browserLocalStorage: StateStorage = {
  getItem: async (name: string) => {
    const result = await browsers.storage.local.get(name)
    return result[name]
  },
  setItem(name, value) {
    return browsers.storage.local.set({ [name]: value })
  },
  removeItem(name) {
    return browsers.storage.local.remove(name)
  },
}

export const useBearStore = create<BearState>()(
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
      storage: createJSONStorage(() => browserLocalStorage),
    },
  ),
)
