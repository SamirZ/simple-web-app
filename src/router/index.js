import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post/:type/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
