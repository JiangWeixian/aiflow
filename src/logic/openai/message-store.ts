import browser from 'webextension-polyfill'

// Only avaliable in local storage
/**
 * @description Store action latest message id, will used in recover conventions message list
 * ```
 * {
 *   [action]: <message-id>
 * }
 * ```
 */
export const createMessageStore = () => {
  return {
    set: async (key: string, value: any) => {
      await browser.storage.local.set({ [key]: value }).then(() => {
        console.debug('Value is set to', value)
      })
    },
    remove: async (key: string) => {
      await browser.storage.local.remove(key).then(async () => {
        if (import.meta.env.DEV) {
          const result = await browser.storage.local.get()
          console.debug('All local storage is', result)
        }
      }).catch((e) => {
        console.error(e)
      })
    },
    get: async (key: string) => {
      const result = await browser.storage.local.get(key)
      console.debug('Value currently is', result)
      return result[key]
    },
    getAll: async () => {
      const result = await browser.storage.local.get()
      console.debug('All local storage is', result)
      return result
    },
    clear: async () => {
      await browser.storage.local.clear()
    },
  }
}
