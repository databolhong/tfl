import Vue from 'vue'
import Router from 'vue-router'

import login from '../pages/login/login'
const NotFoundComponent = r => require.ensure([], () => r(require('../pages/NotFoundComponent.vue')), 'pages')
const home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'pages')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    { path: '*', component: NotFoundComponent }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('to:::', to, 'from:::', from)
  // Router.push({name: 'login'})
  next()
})
export default router
