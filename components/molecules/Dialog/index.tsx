import { ReactNode } from 'react'
import { styled } from 'stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

import { DialogOverlay } from 'components/atoms/DialogOverlay'
import { DialogContent } from 'components/atoms/DialogContent'

const DialogPortal = styled(Dialog.Portal)

interface DialogProps {
  children?: ReactNode
  trigger?: ReactNode
  actions?: ReactNode
  title?: string
  description?: string
  open?: boolean
}

const DialogWrapper = ({
  children,
  trigger,
  actions,
  title,
  description
}: DialogProps) => {
  return (
    <Dialog.Root modal>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent
          title={title}
          description={description}
          actions={actions}
        >
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog.Root>
  )
}

export default DialogWrapper
