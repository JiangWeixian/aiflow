import destr from 'destr'

import type { GroupTabsResult } from './types'

// Command Tabs
/**
 * @description The repsonse of Group command
 */
export const parseGroupResults = (text: string): GroupTabsResult => {
  try {
    const result = destr(text)
    return result
  } catch (e) {
    console.error(e)
    return {}
  }
}
