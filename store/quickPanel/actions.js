export function toggle({commit}) {
    commit('TOGGLE')
}

export function close({commit}) {
    commit('CLOSE')
}

export function open({commit}) {
    commit('OPEN')
}

export function showOverlay({commit}) {
    commit('SHOW_OVERLAY')
}

export function hideOverlay({commit}) {
    commit('HIDE_OVERLAY')
}
