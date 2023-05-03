import {
  useEffect,
  useMemo,
  useState,
} from 'react'
import { sendMessage } from 'webext-bridge'

import { channels } from '~/logic/constants'
import { useUserConfig } from '~/logic/store'

import type { Tabs } from 'webextension-polyfill'

/**
 * @description get all tabs
 */
export const useTabs = () => {
  const [tabs, setTabs] = useState<Tabs.Tab[]>()
  const pinedTabs = useUserConfig(s => s.pinedTabs)
  useEffect(() => {
    const queryTabs = async () => {
      const { tabs } = await sendMessage(channels.QUERY_TABS, {})
      setTabs(tabs)
    }
    queryTabs()
  }, [])
  const _tabs = useMemo(() => {
    return tabs?.filter((tab) => {
      return !pinedTabs?.find(item => tab.id === item.id)
    })
  }, [tabs, pinedTabs])
  return { tabs: _tabs, pinedTabs }
}
