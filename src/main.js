import Vue from 'vue'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import App from './App'
import router from './router'
import store from './store'

// 注册全局Button
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
