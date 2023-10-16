import { prisma } from 'actions/utilities/prisma/getPrismaConnection'

export const upsertAccountInDb = async (payload) => {
  const { provider, providerId, email, fullName, image } = payload

  const account = await prisma.accounts.upsert({
    where: { email },
    create: { email, fullName, image, provider, providerId },
    update: { email, fullName, image, provider, providerId }
  })

  return account
}
