import { keyframes, styled } from 'stitches.config'

const shine = keyframes({
  '0%': { backgroundPosition: '-50%' },

  '100%': { backgroundPosition: '150%' }
})

const StyledSkeleton = styled('div', {
  display: 'inline-block',
  width: '100%',
  height: '2.2rem',
  marginLeft: '0.5em',
  borderRadius: '$smallRadius',
  animation: `${shine} 1.5s infinite ease-in-out alternate`,
  background: 'linear-gradient(90deg, transparent, $secondary11, transparent)',
  backgroundSize: '60% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0 0',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$secondary12'
})

const LoadingSkeleton = StyledSkeleton
export default LoadingSkeleton
