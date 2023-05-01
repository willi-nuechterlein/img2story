import { styled } from 'stitches.config'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

const ToggleGroupRoot = styled(ToggleGroup.Root, {
  display: 'inline-flex',
  backgroundColor: '$white',
  borderRadius: '$smallRadius',
  borderColor: '$gray2',
  borderWidth: 1,
  borderStyle: 'solid',
  zIndex: 100
})

export default ToggleGroupRoot
