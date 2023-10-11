import { Flex, } from '@radix-ui/themes'
import { AccountBadge } from 'components/auth/AccountBadge'
import { Centered } from 'components/radix-ui/Centered'
import Image from 'next/image'
import Link from 'next/link'
import css from './SideNavigation.module.scss'

export const SideNavigation = () => {
  return (
    <Flex direction="column" className={css.sidebar}>
      <Flex direction="column" grow="1">
        {/* logo */}
        <Centered>
          <Link href="/">
            <Image src="/assets/icons/code.svg" width="100" height="100" alt="Logo" />
          </Link>
        </Centered>

        {/* links */}
        <Flex direction="column" grow="1" className={css.links}>
          <Link href="/">Home</Link>
          <Link href="/protected-example">Protected Example</Link>
          <Link href="/rest-api-example">REST API Example</Link>
          <Link href="/firebase-example">Firebase Example</Link>
        </Flex>
      </Flex>

      {/* account badge */}
      <AccountBadge />
    </Flex>
  )
}
