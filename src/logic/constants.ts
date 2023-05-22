import type { ValueOf } from 'type-fest'

// port id
export const GET_CURRENT_TAB = 'get-current-tab'
export const ASK_CHATGPT = 'ask-chatgpt'
const QUERY_TABS = 'query-tabs'
const UPATE_TABS = 'update-tabs'
export const channels = {
  QUERY_TABS,
  ASK_CHATGPT,
  UPATE_TABS,
} as const

// actions
export const ASK_CHATGPT_WITH = 'ask-chatgpt-with'
export const TRANSLATE_WITH = 'translate-with'
export const SUMMARY_WITH = 'summary-with'
export const OPEN_HISTORY = 'open-convenstions-history'
export const CLEAR_STORAGE = 'clear-storage'
const PIN_TAB = 'pin-tab'
const UNPIN_TAB = 'unpin-tab'
const GROUP_TABS = 'group-tabs'
export const actions = {
  ASK_CHATGPT_WITH,
  TRANSLATE_WITH,
  SUMMARY_WITH,
  OPEN_HISTORY,
  CLEAR_STORAGE,
  PIN_TAB,
  UNPIN_TAB,
  GROUP_TABS,
} as const
export type ACTIONS = ValueOf<typeof actions>

// ai chat pages, should endwith -page. e.g. `${actions}-page`
export const ASK_CHATGPT_PAGE = 'ask-chatgpt-with-page'
export const CONFIG_PAGE = 'config-page'
export const TRANSLATE_WITH_PAGE = 'translate-with-page'
export const SUMMARY_WITH_PAGE = 'summary-with-page'
export const HOME_PAGE = 'home-page'
export const SEARCH_TABS_PAGE = 'search-tabs-page'
export const pages = {
  ASK_CHATGPT_PAGE,
  CONFIG_PAGE,
  TRANSLATE_WITH_PAGE,
  HOME_PAGE,
  SUMMARY_WITH_PAGE,
  SEARCH_TABS_PAGE,
} as const
export type PAGES = ValueOf<typeof pages>
interface MetaInfo {
  hasChat: boolean
}
export const meta: Record<string, MetaInfo> = {
  [pages.ASK_CHATGPT_PAGE]: {
    hasChat: true,
  },
  [pages.SUMMARY_WITH_PAGE]: {
    hasChat: true,
  },
  [pages.TRANSLATE_WITH_PAGE]: {
    hasChat: true,
  },
  [pages.SEARCH_TABS_PAGE]: {
    hasChat: false,
  },
  [pages.CONFIG_PAGE]: {
    hasChat: false,
  },
  [pages.HOME_PAGE]: {
    hasChat: false,
  },
}

// user config keys
export const OPENAI_API_KEY = 'OPENAI_API_KEY'
export const ACTIONS_OPTIONS = 'options'
