export const GET_CURRENT_TAB = 'get-current-tab'
// port id
export const ASK_CHATGPT = 'ask-chatgpt'

// actions
export const ASK_CHATGPT_WITH = 'ask-chatgpt-with'
export const TRANSLATE_WITH = 'translate-with'
export const SUMMARY_WITH = 'summary-with'
export type ACTIONS = typeof ASK_CHATGPT_WITH | typeof TRANSLATE_WITH | typeof SUMMARY_WITH

// ai chat pages, should endwith -page. e.g. `${actions}-page`
export const ASK_CHATGPT_PAGE = 'ask-chatgpt-with-page'
export const CONFIG_PAGE = 'config-page'
export const TRANSLATE_WITH_PAGE = 'translate-with-page'
export const HOME_PAGE = 'home-page'
export type PAGES = typeof HOME_PAGE | typeof TRANSLATE_WITH_PAGE | typeof ASK_CHATGPT_PAGE | typeof CONFIG_PAGE

// user config keys
export const OPENAI_API_KEY = 'OPENAI_API_KEY'
export const ACTIONS_OPTIONS = 'options'
