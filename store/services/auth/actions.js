import {isset} from '@/helpers'

export function login({commit}, args) {
  let data
  return this.$axios.$post('Authorization/Basic', args).then(response => {
    console.log(response)
    if (isset(response, 'result.access.token')) {
      commit('user/SET_TOKEN', response.result.access.token, {root: true})
      commit('SUCCCESS')
      return response
    }


    if (isset(response, 'error')) {
      data = {
        type: response.error.type,
        message: response.error.message
      }
      commit('ERROR', data)
      return {error: data}
    }

    data = {
      type: 'UNDEFINED_ERROR',
      message: ''
    }
    commit('ERROR', data)
    return {error: data}


  }).catch(error => {
    data = {
      type: 'NETWORK_ERROR',
      message: error.message
    }
    commit('ERROR', data)
    return {error: data}
  })
}
