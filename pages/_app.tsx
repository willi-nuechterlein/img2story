import type { AppProps } from 'next/app'
import { Provider as JotaiProvider } from 'jotai'
import { globalCss } from 'stitches.config'
import { Inter } from '@next/font/google'
import { Toaster } from 'react-hot-toast'
import { useCronitor } from '@cronitorio/cronitor-rum-nextjs'

import { Box } from 'components/atoms/Box'
import Nav from 'components/molecules/Nav'

const inter = Inter({ subsets: ['latin'] })

const globalStyles = globalCss({
  '*': { boxSizing: 'border-box' },
  'html, body': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    backgroundColor: '$background',
    color: '$text',
    scrollBehavior: 'smooth !important',
    width: '100vw',
    overflowX: 'hidden'
  },
  'a': {
    unset: 'all',
    textDecoration: 'none'
  }
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  useCronitor(process.env.NEXT_PUBLIC_CRONITOR_KEY || '', {
    // @ts-ignore
    scriptSrc: '/e.js'
  })
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <JotaiProvider>
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: '#30a46c',
                secondary: '#f2fcf6'
              }
            }
          }}
        />
        <Box
          css={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: '100vh',
              width: '100vw',
              paddingTop: '$9',
              paddingX: '$4'
            }}
          >
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '40rem',
                gap: '$4',
                width: '100%'
              }}
            >
              <Component {...pageProps} />
              <Nav />
            </Box>
          </Box>
        </Box>
      </JotaiProvider>
    </>
  )
}
