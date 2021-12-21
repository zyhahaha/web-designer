import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Designer from '../views/Designer/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Designer',
    component: Designer
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
