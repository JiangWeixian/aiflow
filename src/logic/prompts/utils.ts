import { actions, ACTIONS_OPTIONS } from '../constants'
import { userConfig } from '~/logic/store/user-config'

import type { ACTIONS } from '../constants'

const translatePrompt = async (text?: string) => {
  if (!text) {
    return ''
  }
  const translateOptions = (await userConfig())[ACTIONS_OPTIONS]?.[actions.TRANSLATE_WITH]
  return `Translate the following text to ${translateOptions?.lang ?? 'English'}: ${text}`
}

const summaryPrompt = async (text?: string) => {
  if (!text) {
    return ''
  }
  // TODO: number of words should be configurable
  return `Summary the following text into 200 words: \n${text}`
}

/**
 * @description Format tabs with group prompts
 */
const groupTabsPrompt = async (text?: string | any[]) => {
  if (!text) {
    return ''
  }
  const resolvedText = Array.isArray(text) ? JSON.stringify(text) : text
  return `Group the data based on the "title" field of the elements in the array, grouping together elements with similar meaning and purpose. Assign a concise and meaningful group name to each group, while excluding the "title" field from the output. The array is as follows: ${resolvedText}. Return the grouped results in JSON data format. Don't explain, don't implement the steps.`
}

export const prompters: Partial<Record<ACTIONS, (text?: any) => Promise<string>>> = {
  [actions.ASK_CHATGPT_WITH]: async (text?: string) => text ?? '',
  [actions.TRANSLATE_WITH]: translatePrompt,
  [actions.SUMMARY_WITH]: summaryPrompt,
  [actions.GROUP_TABS]: groupTabsPrompt,
}
