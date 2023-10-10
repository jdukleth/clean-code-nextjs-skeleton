import './globals.css'
import '@radix-ui/themes/styles.css'
import { Flex, Box, Theme } from '@radix-ui/themes'
import { SideNavigation } from 'components/layout/SideNavigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'greatest-nextjs-skeleton-ever',
  description: 'auth, theme, api, state, linting, rsc, actions',
}

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="ruby" grayColor="slate" radius="small">
          <Flex style={css.wrap} align="stretch">
            <SideNavigation />
            <Box style={css.content}>
              {children}
            </Box>
          </Flex>
        </Theme>
      </body>
    </html>
  )
}

export default RootLayout

const css = {
  wrap: {
    height: '100vh',
    maxHeight: '100vh'
  },

  content: {
    padding: '16px',
  }
}
