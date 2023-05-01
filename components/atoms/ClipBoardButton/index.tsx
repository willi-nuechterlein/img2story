import React from 'react'
import Button from 'components/atoms/Button'
import { toast } from 'react-hot-toast'
import { HiOutlineDuplicate } from 'react-icons/hi'
import { Typography } from 'components/atoms/Typography'

const ClipboardButton = ({ url }: { url: string }) => {
  const handleButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(url)
      toast.success('Link copied')
    } catch (err) {
      toast.error('Failed to copy URL')
    }
  }

  return (
    <>
      <Typography
        css={{
          marginBottom: '$3',
          color: '$secondary10',
          fontSize: '$4'
        }}
      >
        Click to copy link
      </Typography>
      <Button
        outlined
        onClick={handleButtonClick}
        css={{
          marginTop: '-$2',
          width: '100%'
        }}
      >
        <HiOutlineDuplicate size={20} />
        <Typography
          as="span"
          css={{
            marginLeft: '$2'
          }}
        >
          {url}
        </Typography>
      </Button>
    </>
  )
}

export default ClipboardButton
