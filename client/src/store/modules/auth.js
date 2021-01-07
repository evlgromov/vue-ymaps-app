import axios from 'axios'

export default {
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('/auth/login', {
            email: credentials.email,
            password: credentials.password
          })
          .then(res => {
            localStorage.setItem('token', res.data.token)
            context.commit('retrieveToken', res.data)
            resolve(res)
          })
          .catch(e => {
            console.log(e.message)
          })
      })
    },
    register(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/auth/register/`, { 'email': credentials.email, 'password': credentials.password })
          .then(res => {
            resolve(res)
          })
          .catch(e => {
            console.log(e.message)
          })
      })
    },
    destroyToken(context) {
      if(context.getters.loggedIn) {
        localStorage.removeItem('token')
        context.commit('destroyToken')
      }
    }
  },
  mutations: {
    retrieveToken(state, payload) {
      state.token = payload.token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  state: {
    token: localStorage.getItem('token') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  }
}