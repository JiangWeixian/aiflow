import { logger } from '@jiangweixian1994/zustand-middlwares/devtools'
import { local, sync } from '@jiangweixian1994/zustand-middlwares/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { ChatMessage } from '~/logic/openai/types'
// import { getConvention } from '~/logic/conventions'
import type { UserConfig } from '~/logic/store/user-config'

interface BearState {
  /**
   * Group by action
   */
  conventions: Record<string, Partial<ChatMessage>[]>
  upsertConventions: (action: string, msg: ChatMessage) => void
  updateOrUpsertConventions: (action: string, msg: ChatMessage) => void
  newConvention: (action: string) => void
  clear: () => void
}

// conventions
export const useBearStore = create<BearState>()(
  logger(
    persist(
      set => ({
        conventions: {},
        newConvention: async (action) => {
          return set(state => ({
            conventions: {
              ...state.conventions,
              [action]: [],
            },
          }), false, 'newConvention')
        },
        upsertConventions: async (action: string, msg) => {
          return set((state) => {
            const conventions = state.conventions[action] ?? []
            return {
              conventions: {
                ...state.conventions,
                [action]: msg ? conventions.concat(msg) : conventions,
              },
            }
          }, false, 'upsertConventions')
        },
        updateOrUpsertConventions: async (action: string, msg) => {
          return set((state) => {
            let conventions = state.conventions[action] ?? []
            const latest = conventions[conventions.length - 1]
            if (latest?.id !== msg.id) {
              return {
                conventions: {
                  ...state.conventions,
                  [action]: msg ? conventions.concat(msg) : conventions,
                },
              }
            }
            conventions = conventions.map((item) => {
              if (item.id === msg.id) {
                return {
                  ...item,
                  ...msg,
                }
              }
              return item
            })
            return {
              conventions: {
                ...state.conventions,
                [action]: conventions,
              },
            }
          }, false, 'updateOrUpsertConventions')
        },
        clear: () => set({ conventions: {} }),
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
  isChat: boolean
  setIsChat: (isChat: boolean) => void
  toggle: () => void
  setOpen: (open: boolean) => void
  /**
   * @description control subcommand open or not
   */
  subCommandOpen: boolean
  toggleSubCommand: () => void
  setSubCommandOpen: (open: boolean) => void
  historyOpen: boolean
  updateHistoryOpen: (open?: boolean) => void
  toggleHistoryOpen: () => void
}

export const useCMDKStore = create<CMDKState>()(
  logger(
    set => ({
      open: false,
      isChat: false,
      subCommandOpen: false,
      historyOpen: false,
      setIsChat(isChat: boolean) {
        set(() => ({
          isChat,
        }))
      },
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
      toggleHistoryOpen() {
        set(state => ({
          historyOpen: !state.historyOpen,
        }))
      },
      updateHistoryOpen(open) {
        set(() => ({
          historyOpen: !!open,
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
