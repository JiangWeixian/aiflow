import ready from 'document-ready'
import { createRoot } from 'react-dom/client'

import { Popup } from './Popup'

ready(() => {
  const root = createRoot(document.getElementById('root')!)

  root.render(
    <Popup />,
  )
})
