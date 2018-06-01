import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_PATH, // 基础路径用于项目是非根路径下
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
