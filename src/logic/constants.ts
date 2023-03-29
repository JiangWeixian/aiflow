export const GET_CURRENT_TAB = 'get-current-tab'
// port id
export const ASK_CHATGPT = 'ask-chatgpt'

// actions
export const ASK_CHATGPT_WITH = 'ask-chatgpt-with'
export const TRANSLATE_WITH = 'translate-with'
export type ACTIONS = typeof ASK_CHATGPT_WITH | typeof TRANSLATE_WITH

// commands group, should endwith -page
export const ASK_CHATGPT_PAGE = 'ask-chatgpt-page'
export const TRANSLATE_CHATGPT_PAGE = 'translate-chatgpt-page'
