import { primaryColor, secondaryColor, styled } from 'stitches.config'

export const Fieldset = styled('fieldset', {
  all: 'unset',
  marginBottom: '$8',
  width: '100%'
})

export const Label = styled('label', {
  fontSize: '$5',
  fontWeight: '500',
  display: 'block',
  marginBottom: '$2'
})

export const Input = styled('input', {
  all: 'unset',
  borderRadius: '$tinyRadius',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$secondary2',
  padding: '0 10px',
  fontSize: '$5',
  lineHeight: 1,
  height: '2rem',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '$white',

  '&:focus': { boxShadow: `0 0 1px 1px ${primaryColor.indigo9}` }
})

export const TextArea = styled('textarea', {
  all: 'unset',
  boxSizing: 'border-box',
  borderRadius: '$tinyRadius',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$secondary2',
  padding: '10px',
  fontSize: '$5',
  fontWeight: '400',
  color: '$text',
  lineHeight: 1.5,
  width: '100%',
  backgroundColor: '$white',
  whiteSpace: 'pre-wrap',

  '&:focus': { boxShadow: `0 5px 10px 5px ${secondaryColor.slate12}` }
})
