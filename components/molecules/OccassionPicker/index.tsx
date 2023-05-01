import ToggleGroupItem from 'components/atoms/ToggleGroupItem'
import ToggleGroupRoot from 'components/atoms/ToggleGroup'
import { Paragraph } from 'components/atoms/Paragraph'
import { Box } from 'components/atoms/Box'

interface Props {
  value: string
  onChange: (value: string) => void
  options: string[]
}

const OccasionPicker = ({ value, onChange, options }: Props) => {
  return (
    <Box
      css={{
        marginBottom: '$8'
      }}
    >
      <ToggleGroupRoot
        css={{
          width: '100%',
          overflow: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none'
        }}
        type="single"
        value={value}
        onValueChange={onChange}
      >
        {options.map((option) => (
          <ToggleGroupItem
            css={{
              width: '100%'
            }}
            key={option}
            value={option}
          >
            {option}
          </ToggleGroupItem>
        ))}
      </ToggleGroupRoot>
      <Paragraph>Choose the occasion for your speech.</Paragraph>
    </Box>
  )
}

export default OccasionPicker
