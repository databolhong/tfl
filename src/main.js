// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from './axios/axios'
import Cookie from 'vue-cookies'
import Moment from 'vue-moment'
import 'weui/dist/style/weui.min.css'
import weuiJs from 'weui.js'

require('./assets/reset')

Vue.config.productionTip = false
window.$weui = weuiJs
Vue.prototype.$axios = axios

Vue.use(Moment)
Vue.use(Cookie)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
