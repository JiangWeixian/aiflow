// eslint-disable-next-line import/no-extraneous-dependencies
import { createRoot } from 'react-dom/client'
import { onMessage } from 'webext-bridge'

import { App } from './views/App'

(() => {
  console.info('[aiflow] Hello world from content script')

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[aiflow] Navigate from page "${data.title}"`)
  })

  // mount component to context window
  const container = document.createElement('div')
  const root = document.createElement('div')
  container.className = 'aiflow'
  container.id = 'aiflow'
  const styleEl = document.createElement('link')
  const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
  styleEl.setAttribute('rel', 'stylesheet')
  styleEl.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
  shadowDOM.appendChild(styleEl)
  shadowDOM.appendChild(root)
  document.body.appendChild(container)
  const $root = createRoot(root)
  $root.render(<App />)
})()
