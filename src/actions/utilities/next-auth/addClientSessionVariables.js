export const addClientSessionVariables = async ({ session }) => {
  session.user.extra = 'this shows up in the client session'

  return Promise.resolve(session)
}
