/*
 * @Author: yzh
 * @Date: 2021-02-02 11:12:11
 * @LastEditTime: 2021-02-02 15:10:43
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /micro-vue/src/router/index.js
 */
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/vue-app' : process.env.BASE_URL,       // process.env.BASE_URL:'/'
  routes
})

export default router
