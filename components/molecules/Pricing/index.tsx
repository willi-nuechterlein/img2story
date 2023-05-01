import * as React from 'react'
import Link from 'next/link'
import { CheckIcon } from '@radix-ui/react-icons'

import { Box } from 'components/atoms/Box'
import List from 'components/atoms/List'
import { Title } from 'components/atoms/Title'
import { Paragraph } from 'components/atoms/Paragraph'
import Button from 'components/atoms/Button'
import SectionTitle from 'components/atoms/SectionTitle'

const Check = () => (
  <Box
    as="span"
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'inline',
      width: '1.3rem',
      height: '1.3rem',
      borderRadius: '50%',
      backgroundColor: '$green5',
      border: '1px solid $green8',
      marginRight: '$2'
    }}
  >
    <CheckIcon />
  </Box>
)

// const Cross = () => (
//   <Box
//     as="span"
//     css={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       position: 'inline',
//       width: '1.3rem',
//       height: '1.3rem',
//       borderRadius: '50%',
//       backgroundColor: '$red5',
//       border: '1px solid $red8',
//       marginRight: '$2'
//     }}
//   >
//     <Cross2Icon />
//   </Box>
// )
const Pricing = () => (
  <>
    <Box
      css={{
        marginTop: '8vh'
      }}
      id="pricing"
    />
    <SectionTitle
      css={{
        marginBottom: '4vh'
      }}
    >
      pricing
    </SectionTitle>
    <Box
      css={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '$white',
        borderRadius: '$mainRadius',
        boxShadow: '$sectionShadow',
        marginX: '$3',
        paddingX: '$4',

        width: '100%',
        maxWidth: '26rem',
        '@md': {
          paddingX: '$8'
        }
      }}
    >
      <Title
        css={{
          marginTop: '$10'
        }}
      >
        4.5 €
        <Paragraph
          as="span"
          css={{
            marginLeft: '$2'
          }}
        >
          / month
        </Paragraph>
      </Title>
      <List
        css={{
          marginY: '$8',

          listStyle: 'none',
          '& li': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap'
          }
        }}
      >
        <li>
          <Check />
          Unlimited notes
        </li>
        <li>
          <Check /> Find relevant notes in seconds
        </li>
        <li>
          <Check /> Voice input
        </li>
        <li>
          <Check />
          Ask follow-up questions
        </li>
        {/* <li>
          <Cross /> Occasion, Audience, and Tone are locked after purchase
        </li> */}
      </List>
      <Link href={`/app`}>
        <Button
          css={{
            marginBottom: '$10'
          }}
          as="span"
          outlined
        >
          Start Now
        </Button>
      </Link>
    </Box>
  </>
)

export default Pricing
