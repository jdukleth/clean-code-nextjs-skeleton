import { addClientSessionVariables } from 'actions/utilities/next-auth/addClientSessionVariables'
import { credentialsProvider } from 'actions/utilities/next-auth/getCredentialsProvider'
import { gitHubProvider } from 'actions/utilities/next-auth/getGitHubProvider'
import { googleProvider } from 'actions/utilities/next-auth/getGoogleProvider'
import { onSignIn } from 'actions/utilities/next-auth/onSignIn'
import { onSignOut } from 'actions/utilities/next-auth/onSignOut'
import NextAuth from 'next-auth'

export const authOptions = {
  providers: [googleProvider, gitHubProvider, credentialsProvider],
  theme: { logo: process.env.NEXTAUTH_CUSTOM_LOGO },
  events: {
    signIn: onSignIn,
    signOut: onSignOut
  },
  callbacks: {
    session: addClientSessionVariables
  }
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
