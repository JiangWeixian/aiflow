import './style.scss'

import { Chat } from '~/contentScripts/components/chat'
import { CMDK } from '~/contentScripts/components/cmdk'

export const App = () => {
  return (
    <div className="dark">
      <CMDK />
      <Chat />
    </div>
  )
}
