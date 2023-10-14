import { isEqual } from 'underscore'

export const setAccount = (set, get) => (session) => {
  const { name, email, image } = session?.user ?? {}
  const firstName = name?.split(' ')?.[0]

  const account = {
    name,
    firstName,
    email,
    image
  }

  if (isEqual(get().account, account)) return

  set({ account })
}
