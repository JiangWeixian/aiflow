import './style.scss'

import { CMDK } from '~/contentScripts/components/cmdk'
import { Chat } from '~/contentScripts/components/chat'

export const App = () => {
  return (
    <div className="dark">
      <CMDK />
      <Chat />
    </div>
  )
}
