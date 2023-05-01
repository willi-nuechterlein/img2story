import React, { ForwardedRef, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { IconButton } from 'components/atoms/IconButton'
import { keyframes, styled } from 'stitches.config'
import { Box } from 'components/atoms/Box'
import Button from 'components/atoms/Button'

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$text',
  fontSize: '$7'
})

const DialogDescription = styled(Dialog.Description, {
  margin: '$3 0 20px 0',
  color: '$text',
  fontSize: '$5',
  lineHeight: 1.5
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})
export const StyledDialogContent = styled(Dialog.Content, {
  zIndex: 9999,
  backgroundColor: '$white',
  borderRadius: '$mediumRadius',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '40rem',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' }
})

// eslint-disable-next-line react/display-name
export const DialogContent = React.forwardRef(
  (
    {
      children,
      title,
      description,
      actions,
      ...props
    }: {
      children: ReactNode
      actions?: ReactNode
      title?: string
      description?: string
    },
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <StyledDialogContent {...props} ref={forwardedRef}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {description && <DialogDescription>{description}</DialogDescription>}
        {children}
        <Box
          css={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}
        >
          {actions}
          <Dialog.Close asChild>
            <Button
              color="secondary"
              outlined
              size="small"
              css={{
                marginLeft: '$2'
              }}
            >
              Close
            </Button>
          </Dialog.Close>
        </Box>
        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </Dialog.Close>
      </StyledDialogContent>
    )
  }
)
