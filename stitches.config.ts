import {
  blackA,
  gray,
  green,
  red,
  violet,
  blue,
  teal,
  indigo,
  slate,
  slateDark
} from '@radix-ui/colors'

import { createStitches } from '@stitches/react'

export const primaryColor = indigo
export const secondaryColor = slateDark
const primary = {}
Object.assign(primary, {
  primary1: primaryColor.indigo1,
  primary2: primaryColor.indigo2,
  primary3: primaryColor.indigo3,
  primary4: primaryColor.indigo4,
  primary5: primaryColor.indigo5,
  primary6: primaryColor.indigo6,
  primary7: primaryColor.indigo7,
  primary8: primaryColor.indigo8,
  primary9: primaryColor.indigo9,
  primary10: primaryColor.indigo10,
  primary11: primaryColor.indigo11,
  primary12: primaryColor.indigo12
})

const secondary = {}
Object.assign(secondary, {
  secondary1: secondaryColor.slate1,
  secondary2: secondaryColor.slate2,
  secondary3: secondaryColor.slate3,
  secondary4: secondaryColor.slate4,
  secondary5: secondaryColor.slate5,
  secondary6: secondaryColor.slate6,
  secondary8: secondaryColor.slate7,
  secondary7: secondaryColor.slate8,
  secondary9: secondaryColor.slate9,
  secondary10: secondaryColor.slate10,
  secondary11: secondaryColor.slate11,
  secondary12: secondaryColor.slate12
})

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blackA,
      ...primary,
      ...secondary,
      ...red,
      ...violet,
      ...blue,
      ...green,
      ...teal,
      white: '#fff',
      background: slate.slate1,
      text: slate.slate12,
      error: red.red9,
      success: green.green9
    },
    radii: {
      largeRadius: '2.5rem',
      mainRadius: '1.375rem',
      mediumRadius: '0.875rem',
      smallRadius: '0.4rem',
      tinyRadius: '0.3rem'
    },
    fontSizes: {
      1: '0.25rem',
      2: '0.375rem',
      3: '0.6rem',
      4: '0.75rem',
      5: '0.875rem',
      6: '1rem',
      7: '1.25rem',
      8: '1.5rem',
      9: '1.75rem',
      10: '2rem',
      11: '2.25rem',
      12: '2.5rem',
      13: '3rem',
      14: '3.5rem',
      15: '4rem',
      16: '4.5rem',
      17: '5rem'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '64px',
      7: '128px'
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.5rem',
      10: '3rem',
      11: '3.5rem',
      12: '4rem'
    },
    shadows: {
      tileShadow:
        '0px 0px 20px 0 rgba(0,0,0,0.02),0px 2px 10px 0 rgba(0,0,0,0.05)',
      noteShadow: '0 1px 2px 1px rgba(0,0,0,0.04)',
      sectionShadow:
        '0px -10px 20px 0 rgba(0,0,0,0.02),0px -2px 20px 0 rgba(0,0,0,0.05),0px 10px 20px 0 rgba(0,0,0,0.02),0px 2px 20px 0 rgba(0,0,0,0.05)',
      sectionShadowBottom:
        '0px 10px 20px 0 rgba(0,0,0,0.02),0px 2px 10px 0 rgba(0,0,0,0.05)'
    }
  },
  media: {
    sm: '(min-width: 375px)',
    md: '(min-width: 600px)',
    lg: '(min-width: 900px)',
    xl: '(min-width: 1200px)'
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: any) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: any) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: any) => ({ paddingTop: value, paddingBottom: value })
  }
})
