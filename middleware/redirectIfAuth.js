import Cookies from 'js-cookie';

export default function ({ store, redirect }) {
  let token = Cookies.get('token')
  if (token && token !== false) {
    store.commit('user/SET_TOKEN', token)
    return redirect('/')
  }
}
