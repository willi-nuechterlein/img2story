import { Box } from 'components/atoms/Box'
import { Typography } from 'components/atoms/Typography'
import Link from 'next/link'

const Nav = () => {
  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backdropFilter: 'blur(12px)',
        zIndex: 10,
        height: '3.5rem',
        borderTop: '1px solid $secondary11'
      }}
    >
      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          // maxWidth: '60rem',
          padding: '$3'
        }}
      >
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* <Logo size={33} /> */}
          <Link href="/">
            <Typography
              css={{
                marginLeft: '$2',
                fontSize: '$6',
                fontWeight: 600,
                color: '$secondary1'
              }}
            >
              Img2Story
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
export default Nav
