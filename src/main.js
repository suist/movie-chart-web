import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(InfiniteLoading)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
