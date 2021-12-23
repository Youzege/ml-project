import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './publicRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [...publicRoutes]
})

export default router
