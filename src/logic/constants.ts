export const GET_CURRENT_TAB = 'get-current-tab'
// port id
export const ASK_CHATGPT = 'ask-chatgpt'

// actions
export const ASK_CHATGPT_WITH = 'ask-chatgpt-with'
export const TRANSLATE_WITH = 'translate-with'
export const SUMMARY_WITH = 'summary-with'
export const OPEN_HISTORY = 'open-convenstions-history'
export const CLEAR_STORAGE = 'clear-storage'
export const actions = {
  ASK_CHATGPT_WITH,
  TRANSLATE_WITH,
  SUMMARY_WITH,
  OPEN_HISTORY,
  CLEAR_STORAGE,
} as const
export type ACTIONS = typeof ASK_CHATGPT_WITH | typeof TRANSLATE_WITH | typeof SUMMARY_WITH

// ai chat pages, should endwith -page. e.g. `${actions}-page`
export const ASK_CHATGPT_PAGE = 'ask-chatgpt-with-page'
export const CONFIG_PAGE = 'config-page'
export const TRANSLATE_WITH_PAGE = 'translate-with-page'
export const HOME_PAGE = 'home-page'
export const pages = {
  ASK_CHATGPT_PAGE,
  CONFIG_PAGE,
  TRANSLATE_WITH_PAGE,
  HOME_PAGE,
}
export type PAGES = typeof HOME_PAGE | typeof TRANSLATE_WITH_PAGE | typeof ASK_CHATGPT_PAGE | typeof CONFIG_PAGE

// user config keys
export const OPENAI_API_KEY = 'OPENAI_API_KEY'
export const ACTIONS_OPTIONS = 'options'
