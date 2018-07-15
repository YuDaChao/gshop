<template>
  <div id="app">
    <router-view></router-view>
    <!--$route表示当前路由对象-->
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapActions(['getUser'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    /*background-color #f5f5f5*/
</style>
