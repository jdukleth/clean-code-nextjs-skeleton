'use client'

import { Flex, Text, Button, Box } from '@radix-ui/themes'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useAccount } from 'store/useAccount'
import css from './AccountBadge.module.scss'

export const AccountBadge = () => {
  const { data: session } = useSession()
  const { account: { firstName }, setAccount } = useAccount()

  useEffect(() => { setAccount(session) }, [session])

  console.log('rendering AccountBadge')

  if (session === undefined) return <>Loading...</>

  return (
    <Box className={css.wrap}>
      {!!firstName
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
