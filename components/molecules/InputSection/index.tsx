import { ChangeEvent } from 'react'

import { Box } from 'components/atoms/Box'
import { Input } from 'components/atoms/Input'
import InputLabel from 'components/atoms/InputLabel'
import { Typography } from 'components/atoms/Typography'
import ImageUploadButton from 'components/molecules/ImageUploadButton'
import SelectInputField from 'components/molecules/SelectInput'

interface InputSectionProps {
  imageUrl: string
  setImageUrl: (url: string) => void
  uploadedImageUrl: string | undefined
  handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  setName: (name: string) => void
  genre: string
  setGenre: (genre: string) => void
}

const InputSection = ({
  imageUrl,
  setImageUrl,
  uploadedImageUrl,
  handleImageChange,
  genre,
  setGenre,
  setName,
  name
}: InputSectionProps) => {
  return (
    <>
      <Typography
        css={{
          fontSize: '$5',
          fontWeight: 400,
          color: '$secondary10',
          marginTop: '$4',
          marginBottom: '-$3',
          alignSelf: 'flex-start'
        }}
      >
        1. Image
      </Typography>
      <Box
        css={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '$4',
          '@md': {
            flexDirection: 'row'
          }
        }}
      >
        <Box
          css={{
            width: '100%'
          }}
        >
          <InputLabel label="Image URL" />
          <Input
            placeholder={
              uploadedImageUrl
                ? uploadedImageUrl.split('/').pop()
                : 'https://images.unsplash.com/photo-168...'
            }
            disabled={Boolean(uploadedImageUrl)}
            name="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Box>
        <Typography
          css={{
            color: '$secondary11',
            fontSize: '$4',
            fontWeight: 400,
            '@md': {
              marginTop: '$8'
            }
          }}
        >
          OR
        </Typography>
        <ImageUploadButton onImageChange={handleImageChange} />
      </Box>
      <Typography
        css={{
          fontSize: '$5',
          fontWeight: 400,
          color: '$secondary10',
          marginTop: '$4',
          marginBottom: '-$3',
          alignSelf: 'flex-start'
        }}
      >
        2. Story Settings
      </Typography>
      <Box
        css={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '$4',
          '@md': {
            alignItems: 'center',
            flexDirection: 'row'
          }
        }}
      >
        <Box
          css={{
            width: '100%',
            marginRight: 0,
            '@md': {
              width: '28rem',
              marginRight: '$8'
            }
          }}
        >
          <InputLabel label="Character name(s) - optional" />
          <Input
            placeholder='"John and Jane"'
            name="names"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box>
          <InputLabel label="Genre" />
          <SelectInputField
            options={[
              { label: 'Action', value: 'action' },
              { label: 'Adventure', value: 'adventure' },
              { label: 'Drama', value: 'drama' },
              { label: 'Horror', value: 'horror' },
              { label: 'Comedy', value: 'comedy' },
              { label: 'Family', value: 'family' },
              { label: 'Science Fiction', value: 'science fiction' },
              { label: 'Fantasy', value: 'fantasy' },
              { label: 'Thriller', value: 'thriller' },
              { label: 'Romance', value: 'romance' }
            ]}
            value={genre}
            onChange={(v) => setGenre(v)}
            placeholder="Select a genre"
            label="Genre"
          />
        </Box>
      </Box>
    </>
  )
}

export default InputSection
