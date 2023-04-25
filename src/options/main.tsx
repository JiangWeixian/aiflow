import './style.css'

import { createRoot } from 'react-dom/client'

import { Options } from './Options'

const root = createRoot(document.getElementById('root')!)

root.render(
  <Options />,
)
