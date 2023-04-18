import type { RefObject } from 'react'
import { createHooks } from 'hookable'

// eslint-disable-next-line no-spaced-func
export const focusManager = createHooks<Record<string, () => void>>()

interface FocusIfNeedOptions {
  name?: string
}

export const focusIfNeed = (ref: RefObject<any>, options: FocusIfNeedOptions = {}) => {
  const focusInside = () => {
    const timer = setInterval(() => {
      if (ref.current) {
        ref.current.focus()
        clearInterval(timer)
      }
    }, 10)
  }
  if (options.name) {
    focusManager.hook(options.name, focusInside)
  }
  focusInside()
}
