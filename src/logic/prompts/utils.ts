export const formatTranslatePrompt = (text?: string) => {
  if (!text) {
    return ''
  }
  return `Translate the following text to English: ${text}`
}
