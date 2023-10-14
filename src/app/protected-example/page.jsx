import { Box } from '@radix-ui/themes'

const ProtectedExamplePage = () => {
  return (
    <>
      <Box>You are Logged In!</Box>
      <Box>This Route Is Protected By `next-auth`</Box>
    </>
  )
}

export default ProtectedExamplePage
