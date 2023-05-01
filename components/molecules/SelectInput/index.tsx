import React from 'react'
import * as Select from '@radix-ui/react-select'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@radix-ui/react-icons'
import { styled } from 'stitches.config'

const SelectTrigger = styled(Select.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  cursor: 'pointer',
  backgroundColor: '$secondary12',
  color: '$text',
  '&:hover': { backgroundColor: '$primary5', color: '$primary11' },
  '&:focus': { boxShadow: `0 0 0 2px $secondary11` },
  '&[data-placeholder]': { color: '$text' }
})

const SelectIcon = styled(Select.SelectIcon, {
  color: '$text'
})

const SelectContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: '$secondary12',
  borderRadius: 6
  // boxShadow:
  //   '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
})

const SelectViewport = styled(Select.Viewport, {
  padding: 5
})

const StyledItem = styled(Select.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: '$secondary1',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$secondary8',
    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$primary9',
    color: '$white'
  }
})

const SelectLabel = styled(Select.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$secondary11'
})

// const SelectSeparator = styled(Select.Separator, {
//   height: 1,
//   backgroundColor: violet.violet6,
//   margin: 5
// })

const StyledItemIndicator = styled(Select.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: '$secondary5',
  color: '$primary11',
  cursor: 'default'
}

const SelectScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles)

const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles
)

// @ts-ignore
// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    // @ts-ignore
    <StyledItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  )
})

interface SelectOption {
  label: string
  value: string
}

interface SelectInputProps {
  label: string
  placeholder: string
  options: Array<SelectOption>
  value: string
  onChange: (value: string) => void
  defaultValue?: string
}

const SelectRoot = styled(Select.Root, {
  width: '100%'
})

export const SelectInputField = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  defaultValue
}: SelectInputProps) => {
  return (
    <>
      <SelectRoot
        value={value || undefined}
        onValueChange={onChange}
        defaultValue={defaultValue}
      >
        <SelectTrigger>
          <Select.Value placeholder={placeholder} />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <Select.Portal>
          <SelectContent>
            <SelectScrollUpButton>
              <ChevronUpIcon />
            </SelectScrollUpButton>
            <SelectViewport>
              <Select.Group>
                <SelectLabel>{label}</SelectLabel>
                {options.map((option) => (
                  // @ts-ignore
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select.Group>
            </SelectViewport>
            <SelectScrollDownButton>
              <ChevronDownIcon />
            </SelectScrollDownButton>
          </SelectContent>
        </Select.Portal>
      </SelectRoot>
    </>
  )
}

export default SelectInputField
