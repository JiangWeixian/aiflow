import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { compact } from 'lodash-es'
import { local, sync } from '@jiangweixian1994/zustand-middlwares/storage'
import { logger } from '@jiangweixian1994/zustand-middlwares/devtools'

import type { ChatMessage } from '~/logic/openai/types'
import { getConvention } from '~/logic/conventions'
import type { UserConfig } from '~/logic/store/user-config'

interface BearState {
  bears: number
  /**
   * Group by action
   */
  conventions: Record<string, Partial<ChatMessage>[]>
  increase: (by: number) => void
  upsertConventions: (action: string, msg: ChatMessage) => void
  clear: () => void
}

// conventions
export const useBearStore = create<BearState>()(
  logger(
    persist(
      set => ({
        bears: 0,
        conventions: {},
        increase: by => set(state => ({ bears: state.bears + by })),
        upsertConventions: async (action: string, msg) => {
          const conventions = await getConvention(msg.id)
          return set(state => ({
            conventions: {
              ...state.conventions,
              [action]: compact(conventions),
            },
          }), false, 'upsertConventions')
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

interface CMDKState {
  /**
   * @description control cmdk panel open or not
   */
  open: boolean
  toggle: () => void
  setOpen: (open: boolean) => void
  /**
   * @description control subcommand open or not
   */
  subCommandOpen: boolean
  toggleSubCommand: () => void
  setSubCommandOpen: (open: boolean) => void
  chatOpen: boolean
  updateChatOpen: (open?: boolean) => void
  toggleChatOpen: () => void
}

export const useCMDKStore = create<CMDKState>()(
  logger(
    set => ({
      open: false,
      subCommandOpen: false,
      chatOpen: false,
      toggle() {
        set(state => ({
          open: !state.open,
        }))
      },
      setOpen(open: boolean) {
        set(() => ({
          open,
        }))
      },
      toggleSubCommand() {
        set(state => ({
          subCommandOpen: !state.subCommandOpen,
        }))
      },
      setSubCommandOpen(open: boolean) {
        set(() => ({
          subCommandOpen: open,
        }))
      },
      toggleChatOpen() {
        set(state => ({
          chatOpen: !state.chatOpen,
        }))
      },
      updateChatOpen(open) {
        set(() => ({
          chatOpen: !!open,
        }))
      },
    }),
    {
      name: 'cmdk-store',
    },
  ),
)

interface UserConfigState extends Partial<UserConfig> {
  set(config: Partial<UserConfig>): void
}

export const useUserConfig = create<UserConfigState>()(
  logger(
    persist(
      set => ({
        set(config) {
          set(config, false, 'set')
        },
      }),
      { name: 'user-config-store', storage: createJSONStorage(() => sync) },
    ),
    {
      name: 'user-config-store',
    },
  ),
)
