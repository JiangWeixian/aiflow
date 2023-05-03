import browsers from 'webextension-polyfill'

import type { Tabs } from 'webextension-polyfill'
import type { ACTIONS_OPTIONS, TRANSLATE_WITH } from '../constants'

export interface UserConfig {
  pinedTabs: Tabs.Tab[]
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

// zustand persist getState still use old state outside of react component
// so we need to use storage to get the latest state
export const userConfig = async (): Promise<UserConfig> => {
  const result = await browsers.storage.sync.get(['user-config-store'])
  return JSON.parse(result['user-config-store']).state
}
