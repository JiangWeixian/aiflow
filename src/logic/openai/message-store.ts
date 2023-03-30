import browser from 'webextension-polyfill'

// Only avaliable in local storage
export const createMessageStore = () => {
  return {
    set: async (key: string, value: any) => {
      await browser.storage.local.set({ [key]: value }).then(() => {
        console.log('Value is set to', value)
      })
    },
    get: async (key: string) => {
      const result = await browser.storage.local.get(key)
      console.log('Value currently is', result)
      return result[key]
    },
    getAll: async () => {
      const result = await browser.storage.local.get()
      console.log('All local storage is', result)
      return result
    },
    clear: async () => {
      await browser.storage.local.clear()
    },
  }
}
