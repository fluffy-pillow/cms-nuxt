import Vue from 'vue'
import Vuex from 'vuex'

import aside from './aside/index'
import topbar from './topbar/index'
import headerMenu from './headerMenu/index'
import quickPanel from './quickPanel/index'
import user from './services/user/index'
import auth from './services/auth/index'

Vue.use(Vuex)

const createStore = () => new Vuex.Store({
    modules: {
      aside: aside,
      topbar: topbar,
      headerMenu: headerMenu,
      quickPanel: quickPanel,
      user: user,
      auth: auth
    }
})

export default createStore
