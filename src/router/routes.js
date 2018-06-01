import Login from '@/views/login/Index'
import LoginPage from '@/views/login/Login'

export default [{
  path: '/login',
  component: Login,
  children: [{
    path: '/',
    component: LoginPage
  }]
}]
