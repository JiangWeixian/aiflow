import { querySelector } from 'kagekiri'

const ITEM_SELECTOR = '[cmdk-item=""]'

export function getSelectedItem() {
  return querySelector(`${ITEM_SELECTOR}[aria-selected="true"]`)
}
