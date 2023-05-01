import { Typography } from 'components/atoms/Typography'

interface InputLabelProps {
  label?: string
}

const InputLabel = ({ label }: InputLabelProps) => {
  return (
    <Typography
      css={{
        marginTop: '$2',
        marginBottom: '$2',
        fontWeight: 500,
        color: '$text',
        fontSize: '$4'
      }}
    >
      {label}
    </Typography>
  )
}

export default InputLabel
