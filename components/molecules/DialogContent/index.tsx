import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { IconButton } from 'components/atoms/IconButton'
import { keyframes, styled } from 'stitches.config'
import { Box } from 'components/atoms/Box'
import Button from 'components/atoms/Button'

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$secondary12',
  fontSize: 17
})

const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: '$secondary4',
  fontSize: 15,
  lineHeight: 1.5
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})
export const StyledDialogContent = styled(Dialog.Content, {
  zIndex: 3,
  backgroundColor: '$background',
  borderRadius: '$mainRadius',
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

export const DialogContent = ({
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
}) => {
  return (
    <StyledDialogContent {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {description && <DialogDescription>{description}</DialogDescription>}
      {children}
      <Box css={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
        <Dialog.Close asChild>
          <Button color="secondary" outlined size="small">
            Cancel
          </Button>
        </Dialog.Close>
        {actions}
      </Box>
      <Dialog.Close asChild>
        <IconButton aria-label="Close">
          <Cross2Icon />
        </IconButton>
      </Dialog.Close>
    </StyledDialogContent>
  )
}
