import {
  ACTIONS_OPTIONS,
  ASK_CHATGPT_WITH,
  SUMMARY_WITH,
  TRANSLATE_WITH,
} from '../constants'
import { userConfig } from '~/logic/store/user-config'

import type { ACTIONS } from '../constants'

const formatTranslatePrompt = async (text?: string) => {
  if (!text) {
    return ''
  }
  const translateOptions = (await userConfig())[ACTIONS_OPTIONS]?.[TRANSLATE_WITH]
  return `Translate the following text to ${translateOptions?.lang ?? 'English'}: ${text}`
}

const formatSummaryPrompt = async (text?: string) => {
  if (!text) {
    return ''
  }
  // TODO: number of words should be configurable
  return `Summary the following text into 200 words: ${text}`
}

export const formatters: Record<ACTIONS, (text?: string) => Promise<string>> = {
  [ASK_CHATGPT_WITH]: async (text?: string) => text ?? '',
  [TRANSLATE_WITH]: formatTranslatePrompt,
  [SUMMARY_WITH]: formatSummaryPrompt,
}
