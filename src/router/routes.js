import Index from '@/views/Index'
import Cmanage from '@/views/index/Index'
import Login from '@/views/login/Index'
import LoginPage from '@/views/login/Login'

const router = [{
  path: '/admin',
  component: Index,
  children: [{
    path: '/',
    component: Cmanage
  }, {
    path: '/abcd',
    component: Cmanage
  }]
}, {
  path: '/login',
  component: Login,
  children: [{
    path: '/',
    component: LoginPage
  }]
}]

export default router
