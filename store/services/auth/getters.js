export const getErrorInfo = (state) => {
  return {
    type: state.errorType,
    message: state.errorMessage
  }
}

export const isError = (state) => {
  return state.bError
}
