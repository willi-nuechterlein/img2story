import { styled } from 'stitches.config'

const Button = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontFamily: 'inherit',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$smallRadius',
  padding: '$3 $5',
  marginY: '$2',
  cursor: 'pointer',
  //   boxShadow: '$tileShadow',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$primary9',

  variants: {
    size: {
      small: {
        fontSize: '$5',
        padding: '$1 $4'
      }
    },
    color: {
      primary: {
        backgroundColor: '$primary9',
        color: '$primary1',
        '&:hover': {
          backgroundColor: '$primary10'
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $primary11'
        }
      },
      secondary: {
        backgroundColor: '$secondary5',
        borderColor: '$secondary5',
        color: '$secondary12',
        '&:hover': {
          backgroundColor: '$secondary3',
          borderColor: '$secondary3'
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $secondary2'
        }
      }
    },
    outlined: {
      true: {
        backgroundColor: '$background',

        '&:hover': {
          backgroundColor: '$gray1'
        }
      }
    },
    plain: {
      true: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',

        '&:hover': {
          backgroundColor: '$gray3'
        }
      }
    }
  },
  compoundVariants: [
    {
      color: 'primary',
      outlined: true,
      css: {
        backgroundColor: '$background',
        borderColor: '$primary9',
        color: '$primary9',
        '&:hover': {
          borderColor: '$primary10',
          backgroundColor: '$white',
          color: '$primary10'
        }
      }
    },
    {
      color: 'secondary',
      outlined: true,
      css: {
        backgroundColor: '$background',
        borderColor: '$secondary2',
        color: '$secondary2',
        '&:hover': {
          borderColor: '$secondary3',
          backgroundColor: '$white',
          color: '$secondary3'
        }
      }
    },
    {
      color: 'secondary',
      plain: true,
      css: {
        color: '$secondary7',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '$secondary7'
        }
      }
    }
  ],
  defaultVariants: {
    color: 'primary',
    outlined: false
  }
})

export default Button
