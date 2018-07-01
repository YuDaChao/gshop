<template>
  <div id="app">
    <router-view></router-view>
    <!--$route表示当前路由对象-->
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import { getAddress, getShops } from './api'

export default {
  name: 'App',
  components: {
    FooterGuide
  },
  async mounted () {
    const result = await getAddress('40.10038,116.36867')
    const result2 = await getShops({
      latitude: 40.10038,
      longitude: 116.36867
    })
    console.log(result)
    console.log(result2)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background-color #f5f5f5
</style>
