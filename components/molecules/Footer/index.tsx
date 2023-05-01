import { Box } from 'components/atoms/Box'
import { Paragraph } from 'components/atoms/Paragraph'

const Footer = () => (
  <Box
    css={{
      width: '100%',
      height: '10vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10vh'
    }}
  >
    <Paragraph>Made with ❤️ in Berlin</Paragraph>
  </Box>
)

export default Footer
