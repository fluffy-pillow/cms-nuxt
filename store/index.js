import Vue from 'vue'
import Vuex from 'vuex'
import aside from './aside/index'
import topbar from './topbar/index'
import headerMenu from './headerMenu/index'

Vue.use(Vuex)

const createStore = () => new Vuex.Store({
    modules: {
      aside: aside,
      topbar: topbar,
      headerMenu: headerMenu
    }
})

export default createStore
