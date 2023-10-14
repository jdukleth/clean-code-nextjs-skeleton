import './globals.css'
import { Flex, Box, Theme } from '@radix-ui/themes'
import { SideNavigation } from 'components/layout/SideNavigation'
import { Inter } from 'next/font/google'
import css from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'clean-code-nextjs-skeleton',
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
          <Flex className={css.wrap} align="stretch">
            <SideNavigation />
            <Box className={css.content}>
              {children}
            </Box>
          </Flex>
        </Theme>
      </body>
    </html>
  )
}

export default RootLayout
