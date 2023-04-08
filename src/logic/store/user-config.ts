import browser from 'webextension-polyfill'

interface UserConfig {
  // required
  OPENAI_API_KEY: string
}

// Will sync between different browsers
export const createUserConfig = () => {
  return {
    set: async (config: UserConfig) => {
      await browser.storage.sync.set(config)
      const result = await browser.storage.sync.get()
      console.log(result)
    },
    get: async (key: string) => {
      const result = await browser.storage.sync.get(key)
      console.log('Value currently is', result)
      return result[key]
    },
  }
}
