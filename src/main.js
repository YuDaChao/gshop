import Vue from 'vue'
import { Button, Header } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import App from './App'
import router from './router'
import store from './store'

import './config/rem'

import './mock/mockServer'
import './common/stylus/icon.styl'

// 注册全局Button
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
