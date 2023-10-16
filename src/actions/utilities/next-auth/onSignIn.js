import { upsertAccountInDb } from 'actions/account/upsertAccountInDb'

export const onSignIn = async (data) => {
  const account = await upsertAccountInDb({
    provider: data.account.provider,
    providerId: data.account.providerAccountId,
    email: data.user.email,
    fullName: data.user?.name,
    image: data.user?.image
  })

  return account
}
