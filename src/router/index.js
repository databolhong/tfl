import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
