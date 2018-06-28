// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import 'assets/reset'
import 'weui/dist/style/weui.min.css'
import weuiJs from 'weui.js'
Vue.config.productionTip = false
window.$weui = weuiJs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
