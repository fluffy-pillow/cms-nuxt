export const getToken = (state) => {
  return state.token
}

export const isAuthorized = (state) => {
  return !!state.token
}
