import GitHubProvider from 'next-auth/providers/github'

export const gitHubProvider = GitHubProvider({
  clientId: process.env.NEXTAUTH_GITHUB_ID ?? '',
  clientSecret: process.env.NEXTAUTH_GITHUB_SECRET ?? '',
})
