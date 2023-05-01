import { Box } from 'components/atoms/Box'
import { ReactNode } from 'react'

export const IconCircle = ({
  children,
  color,
  ...props
}: {
  children: ReactNode
  color?: string
  [prop: string]: any
}) => {
  const c = color || '$gray'
  return (
    <Box
      {...props}
      css={{
        border: `2px solid ${c}8`,
        width: '$5',
        height: '$5',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${c}2`,
        zIndex: 1,
        '& svg': {
          width: '20px',
          height: '20px',
          '& path': {
            stroke: `${c}10`,
            strokeWidth: '.8px'
          }
        },
        ...props.css
      }}
    >
      {children}
    </Box>
  )
}
