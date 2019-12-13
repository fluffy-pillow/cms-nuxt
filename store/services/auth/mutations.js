export const ERROR = (state, args) => {
  state.bError = true
  state.errorMessage = args.message
  state.errorType = args.type
}

export const SUCCCESS = (state) => {
  state.bError = false
  state.errorMessage = ''
  state.errorType = ''
}
