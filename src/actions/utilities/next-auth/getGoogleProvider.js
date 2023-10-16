import GoogleProvider from 'next-auth/providers/google'

export const googleProvider = GoogleProvider({
  clientId: process.env.NEXTAUTH_GOOGLE_ID ?? '',
  clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET ?? '',
})
