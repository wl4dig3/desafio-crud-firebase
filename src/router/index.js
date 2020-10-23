import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edita/:id',
    name: 'Edita',
    component: () => import('../views/Edita.vue')
  },
  {
    path: '/agrega',
    name: 'Agrega',
    component: () => import('../views/Agrega.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
