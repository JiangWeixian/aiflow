import type { ACTIONS_OPTIONS, TRANSLATE_WITH } from '../constants'
import browsers from 'webextension-polyfill'
export interface UserConfig {
  // required
  OPENAI_API_KEY: string
  /**
   * @description Map action-name object actions
   */
  [ACTIONS_OPTIONS]: {
    [TRANSLATE_WITH]: {
      lang: string
    }
  }
}

// zustand persist getState still use old state, so we need to use storage to get the latest state
export const userConfig = async (): Promise<UserConfig> => {
  const result = await browsers.storage.sync.get(['user-config-store'])
  return JSON.parse(result['user-config-store']).state
}
