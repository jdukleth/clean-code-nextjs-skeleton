import { ProtectedRoute } from 'components/account/ProtectedRoute'

const ProtectedExamplePage = () => {
  return (
    <ProtectedRoute>
      This Route Is Protected By `next-auth`
    </ProtectedRoute>
  )
}

export default ProtectedExamplePage
