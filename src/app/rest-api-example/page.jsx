import { ProtectedRoute } from 'components/auth/ProtectedRoute'

const ProtectedPage = () => {
  return (
    <ProtectedRoute>
      Rest API Example Goes Here
    </ProtectedRoute>
  )
}

export default ProtectedPage
