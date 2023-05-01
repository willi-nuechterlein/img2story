import { styled } from 'stitches.config'

export const Title = styled('h1', {
  fontWeight: '600',
  variants: {
    variant: {
      primary: {
        fontSize: '1.5rem',
        color: '$gray12',
        margin: '0',
        '@md': {
          fontSize: '2rem'
        }
      },
      secondary: {
        fontSize: '$6',
        color: '$gray12',
        margin: '0'
      }
    }
  },
  defaultVariants: { variant: 'primary' }
})
