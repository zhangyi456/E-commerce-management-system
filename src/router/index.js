import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
   redirect:'/Login'
  },
  {
    path: '/Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
