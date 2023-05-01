import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Box } from 'components/atoms/Box'

import { IconCircle } from 'components/atoms/IconCircle'

const LinkButtonCircle = () => {
  return (
    <Box
      css={{
        position: 'absolute',
        right: '8px',
        top: '8px',
        zIndex: 1
      }}
    >
      <IconCircle>
        <ArrowTopRightIcon />
      </IconCircle>
    </Box>
  )
}

export default LinkButtonCircle
