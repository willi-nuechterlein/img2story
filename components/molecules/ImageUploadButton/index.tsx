import Button from 'components/atoms/Button'
import React, { ChangeEvent } from 'react'
import { HiOutlineUpload } from 'react-icons/hi'
import { styled } from 'stitches.config'

const HiddenInput = styled('input', {
  display: 'none'
})

interface StyledImageUploadButtonProps {
  onImageChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const ImageUploadButton: React.FC<StyledImageUploadButtonProps> = ({
  onImageChange
}) => {
  return (
    <>
      <Button
        color="secondary"
        size="small"
        as="label"
        htmlFor="image-upload"
        css={{
          backgroundColor: '$secondary12',
          color: '$text',
          border: 'none',
          marginBottom: '$2',
          height: '2rem',
          width: '10rem',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&:hover': { backgroundColor: '$primary5', color: '$primary11' },
          '@md': {
            width: '12rem',
            alignSelf: 'flex-end'
          }
        }}
      >
        <HiOutlineUpload size={16} />
        Upload Image
      </Button>
      <HiddenInput
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={onImageChange}
      />
    </>
  )
}

export default ImageUploadButton
