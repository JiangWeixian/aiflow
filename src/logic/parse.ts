import destr from 'destr'

// Command Tabs
/**
 * @description The repsonse of Group command
 */
export const parseGroupResults = (text: string): Record<string, { id: number }[]> => {
  try {
    const result = destr(text)
    return result
  } catch (e) {
    console.error(e)
    return {}
  }
}
