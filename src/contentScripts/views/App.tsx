import './style.scss'

import { CMDK } from '../components/cmdk'

export const App = () => {
  return (
    <div className="dark">
      <CMDK />
      <div className="linear z-100 leading-1em fixed right-10 bottom-0 m-5 flex select-none font-sans">
        <div className="r-0 absolute bottom-0 flex h-10 w-10 cursor-pointer rounded-full bg-teal-600 shadow" />
      </div>
    </div>
  )
}
