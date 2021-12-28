import '@/assets/iconfont/index.css'
import '@/styles/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue.prototype.$L = L
Vue.L = Vue.prototype.$L = L

Vue.use(ElementUI, { size: 'small' })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
