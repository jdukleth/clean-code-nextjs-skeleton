import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export const ProtectedRoute = async ({ children }) => {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/api/auth/signin')
  }

  return children
}
