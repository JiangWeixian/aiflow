import * as Select from '@radix-ui/react-select'
import classnames from 'clsx'
import langs from 'lang-list/data/languages.json'
import React from 'react'

import { ACTIONS_OPTIONS, TRANSLATE_WITH } from '~/logic/constants'
import { useUserConfig } from '~/logic/store'

import type { SelectItemProps, SelectProps } from '@radix-ui/react-select'

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        'text-mayumi-gray-1200 data-[highlighted]:bg-mayumi-gray-400 data-[disabled]:text-mayumi-gray-800 relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
})

SelectItem.displayName = 'SelectItem'

interface SelectorProps extends SelectProps {
  container: React.RefObject<HTMLDivElement>
}

// FIXME: navigate with arrow keys looks like not working
export const ExtraOptionsSelector = (props: SelectorProps) => {
  const config = useUserConfig()
  return (
    <Select.Root
      value={config[ACTIONS_OPTIONS]?.[TRANSLATE_WITH].lang}
      onValueChange={(lang) => {
        props.onValueChange?.(lang)
        config.set({
          [ACTIONS_OPTIONS]: {
            [TRANSLATE_WITH]: {
              lang,
            },
          },
        })
      }}
    >
      <Select.Trigger
        className="bg-gray2 text-mayumi-gray-1200 hover:bg-mayumi-gray-300 focus:shadow-gray7 data-[placeholder]:text-mayumi-gray-900 inline-flex items-center justify-center gap-[5px] rounded px-3 py-1 text-xs outline-none focus:shadow-[0_0_0_1px]"
        aria-label="lang"
        autoFocus={false}
        // Should larger than command.input tabindex, make sure commond.input can be auto focused before lang selector
        tabIndex={2}
      >
        <Select.Value placeholder="Select a Language..." />
        <Select.Icon className="text-mayumi-gray-1200">
          <i className="gg-chevron-down/0.75" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal container={props.container.current}>
        <Select.Content className="bg-gray2 overflow-hidden rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="bg-gray2 text-mayumi-gray-1200 flex h-[25px] cursor-default items-center justify-center">
            <i className="gg-chevron-up/0.75" />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            {Object.keys(langs).map((key: string) => {
              const lang = langs[key as keyof typeof langs]
              return <SelectItem key={key} value={lang.int}>{lang.int}</SelectItem>
            })}
          </Select.Viewport>
          <Select.ScrollDownButton className="bg-gray2 text-mayumi-gray-1200 flex h-[25px] cursor-default items-center justify-center">
            <i className="gg-chevron-down/0.75" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
