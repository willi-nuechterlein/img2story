import { Title } from 'components/atoms/Title'
import { ReactNode } from 'react'

const SectionTitle = ({
  children,
  css
}: {
  children: ReactNode
  css?: any
}) => (
  <Title
    variant="secondary"
    css={{
      textTransform: 'uppercase',
      marginTop: '$11',
      marginBottom: '$5',
      fontSize: '$8',
      ...css
    }}
  >
    {children}
  </Title>
)

export default SectionTitle
