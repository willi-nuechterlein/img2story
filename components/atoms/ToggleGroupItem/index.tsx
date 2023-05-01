import { styled } from 'stitches.config'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

const ToggleGroupItem = styled(ToggleGroup.Item, {
  all: 'unset',
  backgroundColor: '$white',
  color: '$secondary2',
  height: 35,
  width: '100%',
  display: 'flex',
  fontSize: '$4',
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginLeft: 1,
  paddingX: 10,
  borderTop: '1px solid $gray6',
  borderBottom: '1px solid $gray6',
  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: '$smallRadius',
    borderBottomLeftRadius: '$smallRadius',
    borderLeft: '1px solid $gray6'
  },
  '&:last-child': {
    borderTopRightRadius: '$smallRadius',
    borderBottomRightRadius: '$smallRadius',
    borderRight: '1px solid $gray6'
  },
  '&:hover': { backgroundColor: '$primary3' },
  '&[data-state=on]': {
    backgroundColor: '$primary5',
    color: '$primary11'
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px $grey12` }
})

export default ToggleGroupItem
