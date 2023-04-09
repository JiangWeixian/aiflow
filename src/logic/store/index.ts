import { create } from 'zustand'
import type { StateStorage } from 'zustand/middleware'
import { createJSONStorage, persist } from 'zustand/middleware'
import { compact } from 'lodash-es'
import browsers from 'webextension-polyfill'
import type { StateCreator, StoreApi, StoreMutatorIdentifier } from 'zustand'

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

type Logger = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = [],
>(
  f: StateCreator<T, [...Mps, ['logger', never]], Mcs>,
  options: {
    name?: string
  }
) => StateCreator<T, Mps, [['logger', never], ...Mcs]>

type LoggerImpl = <T>(
  f: StateCreator<T, [], []>,
  options: {
    name?: string
  }
) => StateCreator<T, [], []>

type Cast<T, U> = T extends U ? T : U
type Write<T, U> = Omit<T, keyof U> & U
type TakeTwo<T> = T extends { length: 0 }
  ? [undefined, undefined]
  : T extends { length: 1 }
    ? [...a0: Cast<T, unknown[]>, a1: undefined]
    : T extends { length: 0 | 1 }
      ? [...a0: Cast<T, unknown[]>, a1: undefined]
      : T extends { length: 2 }
        ? T
        : T extends { length: 1 | 2 }
          ? T
          : T extends { length: 0 | 1 | 2 }
            ? T
            : T extends [infer A0, infer A1, ...unknown[]]
              ? [A0, A1]
              : T extends [infer A0, (infer A1)?, ...unknown[]]
                ? [A0, A1?]
                : T extends [(infer A0)?, (infer A1)?, ...unknown[]]
                  ? [A0?, A1?]
                  : never

type WithDevtools<S> = Write<S, StoreDevtools<S>>

type StoreDevtools<S> = S extends {
  setState: (...a: infer Sa) => infer Sr
}
  ? {
      setState<A extends string | { type: unknown }>(
        ...a: [...a: TakeTwo<Sa>, action?: A]
      ): Sr
    }
  : never
export type NamedSet<T> = WithDevtools<StoreApi<T>>['setState']

declare module 'zustand' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface StoreMutators<S, A> {
    'logger': WithDevtools<S>
  }
}
interface Action<T = any> {
  type: T
}

const loggerImpl: LoggerImpl = (f, options) => (set, get, store) => {
  type T = ReturnType<typeof f>
  const loggedSet: NamedSet<T> = (state, replace, nameOrAction) => {
    const action: Action<unknown>
      = nameOrAction === undefined
        ? { type: 'anonymous' }
        : typeof nameOrAction === 'string'
          ? { type: nameOrAction }
          : nameOrAction
    console.group(`%c action: ${options.name} : ${action.type}`, 'font-weight: bold;')
    console.log('%c prev state:', 'color: gray; font-weight: bold;', get())
    console.log('%c action:', 'color: #0066db; font-weight: bold;', action)
    set(state, replace)
    console.log('%cnext state:', 'color: #006b3b; font-weight: bold;', get())
    console.groupEnd()
  }
  store.setState = loggedSet

  return f(loggedSet, get, store)
}

export const logger = loggerImpl as unknown as Logger

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
          }), false, 'toggleChatOpen')
        },
        clear: () => set({ bears: 0, conventions: {} }),
      }),
      {
        name: 'aiflow-message-store',
        storage: createJSONStorage(() => browserLocalStorage),
      },
    ),
    {
      name: 'aiflow-message-store',
    },
  ),
)
