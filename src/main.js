// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import store from './store/'
import "lib-flexible";
import '@/icons'
import '@/common/stylus/index.styl'
import {
  LoadingPlugin
} from 'vux'
Vue.use(LoadingPlugin)




FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
