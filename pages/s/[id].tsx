import { Box } from 'components/atoms/Box'
import { Title } from 'components/atoms/Title'
import { Typography } from 'components/atoms/Typography'
import { supabase } from 'lib/supabase/supabase'
import Image from 'next/image'

export default function Page({
  title,
  story,
  image
}: {
  title: string
  story: string
  image: string
}) {
  return (
    <Box
      css={{
        marginBottom: '15rem'
      }}
    >
      <Box
        css={{
          height: '25rem',
          width: '100%',
          position: 'relative'
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: 'contain'
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAEElEQVR42mPcsOFOPQMQAAASBQK9nYcwsAAAAABJRU5ErkJggg=="
        />
      </Box>
      <Box
        css={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '$4',
          marginTop: '$10',
          whiteSpace: 'pre-wrap'
        }}
      >
        <Title>{title}</Title>
        <Typography
          css={{
            fontSize: '$6',
            lineHeight: '1.6rem',
            lineBreak: 'auto'
          }}
        >
          {story}
        </Typography>
      </Box>
    </Box>
  )
}

export async function getServerSideProps(context: any) {
  const { id } = context.params
  const { data, error } = await supabase.from('story').select('*').eq('key', id)
  if (error || !data.length) {
    return {
      notFound: true
    }
  }
  const { title, story, image } = data[0]
  return {
    props: {
      title,
      story,
      image
    }
  }
}
