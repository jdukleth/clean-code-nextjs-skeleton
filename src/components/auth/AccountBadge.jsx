import { Flex, Text, Button, Box } from '@radix-ui/themes'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import css from './AccountBadge.module.scss'

export const AccountBadge = async () => {
  const session = await getServerSession()
  const firstName = session?.user?.name?.split(' ')?.[0] ?? 'Account'

  return (
    <Box className={css.wrap}>
      {!!session
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
          <Button asChild>
            <Link href="/api/auth/signin" className={css.button}>Sign In</Link>
          </Button>
        )
      }
    </Box>
  )
}
