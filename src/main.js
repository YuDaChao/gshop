import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import { Button, Header } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import App from './App'
import router from './router'
import store from './store'

import loading from './common/images/loading.gif'

import './config/rem'

import './mock/mockServer'
import './common/stylus/icon.styl'

// 注册全局Button
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)

// 使用插件
Vue.use(VueLazyLoad, {
  error: loading,
  loading
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
