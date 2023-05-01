import { ChangeEvent, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import * as Cronitor from '@cronitorio/cronitor-rum-js'
import {
  HiOutlineChat,
  HiOutlineExternalLink,
  HiOutlinePhotograph
} from 'react-icons/hi'

import { Box } from 'components/atoms/Box'
import Button from 'components/atoms/Button'
import { Typography } from 'components/atoms/Typography'
import { Title } from 'components/atoms/Title'
import LoadingStepper from 'components/molecules/LoadinStepper'
import ClipboardButton from 'components/atoms/ClipBoardButton'
import InputSection from 'components/molecules/InputSection'

export default function Page({ hostName }: { hostName: string }) {
  const router = useRouter()
  const [parent] = useAutoAnimate()
  const [imageUrl, setImageUrl] = useState('')
  const [genre, setGenre] = useState('')
  const [response, setResponse] = useState<{ title: string; plot: string }>()
  const [loading, setLoading] = useState(false)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | undefined>()
  const [currentStep, setCurrentStep] = useState<number | undefined>()
  const [storyUrl, setStoryUrl] = useState('')
  const [name, setName] = useState('')
  const [caption, setCaption] = useState('')

  const image = uploadedImageUrl || imageUrl
  const BASE_URL = hostName

  const { limit } = router.query

  const handleSubmit = async () => {
    setStoryUrl('')
    setResponse(undefined)
    setLoading(true)
    setCurrentStep(0)
    Cronitor.track('GenerateStory')
    try {
      if (!image) {
        toast.error('Please add an image')
        setLoading(false)
        return
      }
      // get photo caption
      if (!caption) {
        const submitResult = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            imageUrl: image,
            nolimit: process.env.NODE_ENV === 'development' || limit === 'no'
          })
        })
        if (submitResult.status === 403) {
          toast.error('Too many requests')
          setCurrentStep(0)
          setLoading(false)
          return
        }
        if (submitResult.status !== 200) {
          toast.error('Something went wrong')
          setCurrentStep(0)
          setLoading(false)
          return
        }
        const captionResult = await submitResult.json()
        setCaption(captionResult)
      }
      setCurrentStep(1)

      // get title and outline
      const plotResult = await fetch('/api/plot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caption, genre, name })
      })
      if (plotResult.status !== 200) {
        toast.error('Something went wrong')
        setCurrentStep(0)
        setLoading(false)
        return
      }
      const { title, outline } = await plotResult.json()
      setCurrentStep(2)

      // get story
      const storyResult = await fetch('/api/story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ outline, genre, title })
      })
      if (storyResult.status !== 200) {
        toast.error('Something went wrong')
        setCurrentStep(0)
        setLoading(false)
        return
      }
      const { story } = await storyResult.json()
      setCurrentStep(3)

      setResponse({ title, plot: story })
      setLoading(false)
    } catch (error) {
      setCurrentStep(0)
      setLoading(false)
      toast.error('Something went wrong')
    }
  }

  const handleSave = async () => {
    try {
      const entry = await fetch('/api/db/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image,
          title: response?.title,
          story: response?.plot
        })
      })
      if (entry.status === 200) {
        const { key } = await entry.json()
        setStoryUrl(`${BASE_URL}/s/${key}`)
        toast.success('Story saved')
      } else {
        toast.error('Saving failed')
      }
    } catch (error) {
      toast.error('Saving failed')
    }
  }

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const fileSize = file.size
      const maxFileSize = 4 * 1024 * 1024

      if (fileSize > maxFileSize) {
        toast.error('Image size must be less than 4 MB')
        return
      }
      console.log('Selected file:', file)
      console.log('Selected file name:', file.name)
      const formData = new FormData()
      formData.append('file', file)
      try {
        const uploadResponse = await fetch('/api/db/upload', {
          method: 'POST',
          body: formData
        })
        if (uploadResponse.status === 200) {
          const { fileUrl } = await uploadResponse.json()
          setUploadedImageUrl(fileUrl)
          toast.success('Image uploaded')
        } else {
          toast.error('Image upload failed')
        }
      } catch (error) {
        toast.error('Image upload failed')
      }
    }
  }
  return (
    <>
      <Title
        css={{
          fontSize: '$8',
          marginBottom: '$4',
          fontWeight: 800,
          lineHeight: '1.2',
          alignSelf: 'flex-start',
          '& span': {
            display: 'block'
          }
        }}
      >
        Transform
        <span>any Image</span>
        <span>into a Story</span>
      </Title>
      {image ? (
        <Box
          css={{
            marginBottom: '$2',
            height: '20rem',
            width: '100%',
            border: '1px solid $gray7',
            borderRadius: '$smallRadius',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '$secondary11',
            position: 'relative'
          }}
        >
          <Image
            unoptimized
            src={image}
            fill
            style={{
              objectFit: 'contain'
            }}
            alt=""
          />
        </Box>
      ) : (
        <Box
          css={{
            marginBottom: '$2',
            height: '20rem',
            width: '100%',
            border: '3px dashed $gray7',
            borderRadius: '$smallRadius',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '$secondary11',
            position: 'relative'
          }}
        >
          <HiOutlinePhotograph size={30} />
          {'->'}
          <HiOutlineChat size={30} />
        </Box>
      )}
      <InputSection
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        uploadedImageUrl={uploadedImageUrl}
        handleImageChange={handleImageChange}
        genre={genre}
        setGenre={setGenre}
        setName={setName}
        name={name}
      />
      <Button
        disabled={!image || !genre}
        color="primary"
        css={{
          width: '100%',
          marginTop: '$4'
        }}
        onClick={handleSubmit}
      >
        Generate
      </Button>
      <Box
        ref={parent}
        css={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '$4'
        }}
      >
        {loading && !response ? (
          <>
            <Typography
              css={{
                fontSize: '$5',
                marginTop: '$8',
                color: '$gray9'
              }}
            >
              Hold on. This might take a minute
            </Typography>
            <Box ref={parent}>
              <LoadingStepper
                steps={['Scanning Image', 'Generating Plot', 'Writing Story']}
                currentStep={currentStep}
              />
            </Box>
          </>
        ) : null}
        {response && !loading ? (
          <>
            <Title
              css={{
                marginTop: '$8'
              }}
            >
              {response.title}
            </Title>
            <Typography
              css={{
                fontSize: '$6',
                lineHeight: '1.6rem',
                lineBreak: 'auto',
                whiteSpace: 'pre-wrap'
              }}
            >
              {response.plot}
            </Typography>
          </>
        ) : null}
      </Box>
      <Box
        ref={parent}
        css={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '12rem',
          marginTop: '$8'
        }}
      >
        {response && !loading ? (
          <>
            {storyUrl ? (
              <ClipboardButton url={storyUrl} />
            ) : (
              <Button
                color="secondary"
                outlined
                size="small"
                css={{
                  paddingY: '$2',
                  width: '100%'
                }}
                onClick={handleSave}
              >
                <HiOutlineExternalLink size={18} />
                <Typography as="span" css={{ marginLeft: '$2' }}>
                  Save & Share
                </Typography>
              </Button>
            )}
          </>
        ) : null}
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hostName = context.req.headers.host

  return {
    props: {
      hostName
    }
  }
}
