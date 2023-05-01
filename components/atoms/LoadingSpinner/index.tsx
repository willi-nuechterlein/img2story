import React from 'react'
import { keyframes, styled } from 'stitches.config'

const SpinnerContainer = styled('div', {
  display: 'inline-block',
  // position: 'relative',
  width: '64px',
  height: '64px',
  marginRight: '$1'
})

const spinnerKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const SpinnerCircle = styled('div', {
  // width: '50px',
  // height: '50px',
  border: '5px solid $background',
  borderTop: '5px solid $secondary1',
  borderLeft: '5px solid $secondary1',
  borderRadius: '50%',
  animation: `${spinnerKeyframes} 1.5s linear infinite`
})

type Props = {
  size?: number
}

const LoadingSpinner: React.FC<Props> = ({ size = 20 }) => {
  return (
    <SpinnerContainer css={{ width: `${size}px`, height: `${size}px` }}>
      <SpinnerCircle css={{ width: `${size}px`, height: `${size}px` }} />
    </SpinnerContainer>
  )
}

export default LoadingSpinner
