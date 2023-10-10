import { Flex, Text, Button, Box } from '@radix-ui/themes'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

export const AccountBadge = async () => {
  const session = await getServerSession()
  const firstName = session?.user?.name?.split(' ')?.[0] ?? 'Account'

  return (
    <Box asChild style={css.wrap}>
      {session
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
            <Link href="/api/auth/signin">Sign In</Link>
          </Button>
        )
      }
    </Box>
  )
}

const css = {
  wrap: {
    padding: '8px 16px',
    backgroundColor: '#181818',
  }
}
