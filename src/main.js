// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'

import '../static/reset'

import router from './router'
import store from './vuex/store'
import axios from './axios/axios'
import Cookie from 'vue-cookies'
import Moment from 'vue-moment'
import Mintui from 'mint-ui'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(Moment)
Vue.use(Cookie)
Vue.use(Mintui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: {
    EVENTBUS: new Vue() // 组件间事件触发使用
  },
  components: { App },
  template: '<App/>'
})
