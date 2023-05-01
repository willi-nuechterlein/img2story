import Image from 'next/image'

const Logo = ({ size = 60 }: { size?: number }) => {
  return (
    // <Box
    //   css={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     marginTop: '1vh'
    //   }}
    // >
    <Image src="/logo.png" alt="logo" width={size} height={size} />
    // </Box>
  )
}

export default Logo
