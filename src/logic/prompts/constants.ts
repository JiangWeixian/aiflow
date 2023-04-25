import { TRANSLATE_WITH } from '../constants'

import type { ACTIONS } from '../constants'

// As https://platform.openai.com/docs/guides/chat/instructing-chat-models
export const systemMessages = {
  [TRANSLATE_WITH]: 'I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is "istanbulu cok seviyom burada olmak cok guzel"',
} as Record<ACTIONS, string | undefined>
