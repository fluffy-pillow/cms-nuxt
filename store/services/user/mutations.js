import Cookies from 'js-cookie';

export const SET_TOKEN = (state, arg) => {
  Cookies.set('token', arg, { expires: 365 })
  state.token = arg
}
