import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
   redirect:'/Login'
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
