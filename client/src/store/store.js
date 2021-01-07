import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import marker from './modules/marker'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    marker,
    auth,
  }
})