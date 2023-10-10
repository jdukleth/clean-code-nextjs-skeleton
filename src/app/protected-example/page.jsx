import { ProtectedRoute } from 'components/auth/ProtectedRoute'

const ProtectedExamplePage = () => {
  return (
    <ProtectedRoute>
      This Route Is Protected By `next-auth`
    </ProtectedRoute>
  )
}

export default ProtectedExamplePage
