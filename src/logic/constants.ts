export const GET_CURRENT_TAB = 'get-current-tab'
// port id
export const ASK_CHATGPT = 'ask-chatgpt'

// actions
export const ASK_CHATGPT_WITH = 'ask-chatgpt-with'
export const TRANSLATE_WITH = 'translate-with'
export const SUMMARY_WITH = 'summary-with'
export type ACTIONS = typeof ASK_CHATGPT_WITH | typeof TRANSLATE_WITH | typeof SUMMARY_WITH

// commands group, should endwith -page
export const ASK_CHATGPT_PAGE = 'ask-chatgpt-page'
export const CONFIG_PAGE = 'config-page'

// user config keys
export const OPENAI_API_KEY = 'OPENAI_API_KEY'
