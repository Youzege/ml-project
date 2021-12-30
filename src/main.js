import '@/assets/iconfont/index.css'
import '@/styles/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as L from 'leaflet'
import 'leaflet-minimap'
import 'leaflet-minimap/dist/Control.MiniMap.min.css'
import 'leaflet-mouse-position'
import 'leaflet-mouse-position/src/L.Control.MousePosition.css'
import 'leaflet.chinatmsproviders'
import 'leaflet.locatecontrol'
import 'leaflet.locatecontrol/dist/L.Control.Locate.css'
// 引入 leaflet.markercluster
import 'leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.wmts'
import 'leaflet/dist/leaflet.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.L = Vue.prototype.$L = L
/* leaflet icon 解决webpack编译成base64无法找到marker图标问题 */
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.use(ElementUI, { size: 'small' })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
