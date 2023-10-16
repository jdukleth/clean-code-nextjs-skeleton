'use client'

import { Flex, Text, Button, Box } from '@radix-ui/themes'
import { Skeleton } from 'components/radix-ui/Skeleton'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useAccount } from 'store/useAccount'
import css from './AccountBadge.module.scss'

export const AccountBadge = () => {
  const { data: session, status } = useSession()
  const { account, setAccount } = useAccount()
  const { firstName } = account
  const isAuthenticated = status === 'authenticated'

  useEffect(() => { setAccount(session) }, [session])

  if (status === 'loading') {
    return (
      <Box className={css.wrap}>
        <Skeleton width="100%" height="32px" />
      </Box>
    )
  }

  return (
    <Box className={css.wrap}>
      {isAuthenticated
        ? (
          <Flex gap="2" align="center">
            <Box grow="1">
              <Text>{firstName}</Text>
            </Box>
            <Button asChild>
              <Link href="/api/auth/signout">Sign Out</Link>
            </Button>
          </Flex>
        )
        : (
          <>
            <Button asChild>
              <Link href="/api/auth/signin" className={css.button}>Sign In</Link>
            </Button>
          </>
        )
      }
    </Box>
  )
}
