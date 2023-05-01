import { CheckIcon } from '@radix-ui/react-icons'
import { Box } from 'components/atoms/Box'

interface Props {
  title: string
  value: string
  // TODO error state
}

const AccordionButtonTitle = ({ title, value }: Props) => (
  <Box
    css={{
      display: 'flex',
      alignItems: 'center',
      gap: '$4'
    }}
  >
    <Box
      className={`check-icon ${value ? '' : 'no-data'}`}
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1.3rem',
        height: '1.3rem',
        borderRadius: '50%',
        backgroundColor: '$green5',
        border: '1px solid $green8'
      }}
    >
      <CheckIcon />
    </Box>
    {title}
    <Box
      as="span"
      css={{
        color: '$gray10',
        fontSize: '$4',
        fontWeight: 400,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '17rem',
        '@md': {
          maxWidth: '23rem'
        }
      }}
    >
      {value}
    </Box>
  </Box>
)

export default AccordionButtonTitle
