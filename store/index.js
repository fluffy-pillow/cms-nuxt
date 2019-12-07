import Vue from 'vue'
import Vuex from 'vuex'
import aside from './aside/index'
import topbar from './topbar/index'
import toolbar from './toolbar/index'

Vue.use(Vuex)

const createStore = () => new Vuex.Store({
    modules: {
      aside: aside,
      topbar: topbar,
      toolbar: toolbar
    }
})

export default createStore
