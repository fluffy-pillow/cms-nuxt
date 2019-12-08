export const TOGGLE = (state) => {
  state.bOpen = !state.bOpen
}

export const CLOSE = (state) => {
  state.bOpen = false
}

export const OPEN = (state) => {
  state.bOpen = true
}

export const SHOW_OVERLAY = (state) => {
  state.bShowOverlay = true
}

export const HIDE_OVERLAY = (state) => {
  state.bShowOverlay = false
}
