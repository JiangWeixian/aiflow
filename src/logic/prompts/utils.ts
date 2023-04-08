import type { ACTIONS } from '../constants'
import { ASK_CHATGPT_WITH, SUMMARY_WITH, TRANSLATE_WITH } from '../constants'

const formatTranslatePrompt = (text?: string) => {
  if (!text) {
    return ''
  }
  // TODO: lang should be configurable
  return `Translate the following text to English: ${text}`
}

const formatSummaryPrompt = (text?: string) => {
  if (!text) {
    return ''
  }
  // TODO: number of words should be configurable
  return `Summary the following text into 200 words: ${text}`
}

export const formatters: Record<ACTIONS, (text?: string) => string> = {
  [ASK_CHATGPT_WITH]: (text?: string) => text ?? '',
  [TRANSLATE_WITH]: formatTranslatePrompt,
  [SUMMARY_WITH]: formatSummaryPrompt,
}
