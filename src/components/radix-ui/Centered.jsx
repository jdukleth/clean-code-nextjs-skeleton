import { Flex } from '@radix-ui/themes'

export const Centered = ({ children }) => (
  <Flex asChild direction="column" align="center" justify="center">
    {children}
  </Flex>
)
