/* eslint-disable react/display-name */
import React, { ReactNode } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { violet, blackA, mauve } from '@radix-ui/colors'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { keyframes, styled } from 'stitches.config'

const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex'
})

const StyledTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  width: '100%',
  fontFamily: 'inherit',
  backgroundColor: mauve.mauve3,
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$5',
  fontWeight: 500,
  lineHeight: 1,
  boxShadow: `0 1px 0 ${mauve.mauve8}`,
  cursor: 'pointer',
  '&:hover': { backgroundColor: 'transparent' },
  '[data-state=open] & .check-icon, .no-data': {
    backgroundColor: '$white',
    border: '1px solid $gray8',
    '& svg ': {
      visibility: 'hidden'
    }
  },
  '[data-state=open] & span': {
    visibility: 'hidden'
  }
})

const StyledChevron = styled(ChevronDownIcon, {
  color: violet.violet10,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' }
})

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' }
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 }
})

const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: mauve.mauve11,
  backgroundColor: mauve.mauve1,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
  }
})

const StyledContentText = styled('div', {
  padding: '15px 20px'
})

const AccordionRoot = styled(Accordion.Root, {
  borderRadius: '$smallRadius',
  width: '100%',
  backgroundColor: mauve.mauve6,
  boxShadow: `0 2px 10px ${blackA.blackA4}`
})

export const AccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,
  width: '100%',

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 6px 3px ${mauve.mauve6}`
  }
})

export const AccordionTrigger = React.forwardRef(
  // @ts-ignore
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      {/* @ts-ignore */}
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  )
)

export const AccordionContent = React.forwardRef(
  //@ts-ignore
  ({ children, ...props }, forwardedRef) => (
    //@ts-ignore
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
)

interface AccordionDemoProps {
  children: ReactNode
}

const EditorAccordion = ({ children }: AccordionDemoProps) => (
  <AccordionRoot type="single" defaultValue="item-1" collapsible>
    {children}
  </AccordionRoot>
)

export default EditorAccordion
