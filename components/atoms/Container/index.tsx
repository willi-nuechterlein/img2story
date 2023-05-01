import { Box } from 'components/atoms/Box'
import { ReactNode } from 'react'
import { styled } from 'stitches.config'

const StyledContainer = styled('div', {
  maxWidth: '35rem',
  margin: '0 auto'
})
const Container = ({ children }: { children: ReactNode }) => {
  return (
    <StyledContainer>
      <Box
        css={{
          marginX: '$3'
        }}
      >
        {children}
      </Box>
    </StyledContainer>
  )
}

export default Container
