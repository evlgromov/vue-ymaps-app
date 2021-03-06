import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import marker from './modules/marker'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'https://vue-ymaps-server.herokuapp.com/api'

export default new Vuex.Store({
  modules: {
    marker,
    auth,
  }
})