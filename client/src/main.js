import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import YmapPlugin from 'vue-yandex-maps'


import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios, axios)
Vue.use(YmapPlugin, {
  apiKey: '7f037fcc-21f0-4c1b-ad6e-1f292ef45a2f',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
})

Vue.prototype.$eventBus = new Vue();
const config = {baseURL: 'http://localhost:3000/api'}

const authInterceptor = (config) => {
  const authToken = localStorage.getItem('token')
  config.headers.Authorization = authToken;
  return config;
}

axios.interceptors.request.use(authInterceptor);

axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if(error.response.status === 401) {
      store.dispatch('destroyToken')
      router.push({
        name: 'Login',
        params: {
          message: 'Срок действия токена истек, пожалуйста авторизуйтесь!'
        }
      })
    }
    return Promise.reject(error)
  }
)

new Vue({
  router,
  axios: axios.create(config),
  store,
  render: h => h(App)
}).$mount('#app')
