<template>
    <div class="shop">
      <ShopHeader :shopInfo="shopInfo" />
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/shop/goods">点餐</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shop/rating">评价</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shop/info">商家</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import ShopHeader from '../../components/ShopHeader/ShopHeader'

export default {
  name: 'Shop',
  components: {
    ShopHeader
  },
  mounted () {
    this.getShopInfo()
    this.getShopRatings()
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['getShopInfo', 'getShopRatings'])
  },
  computed: {
    ...mapState(['shopInfo'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .shop
    .nav
        width 100%
        display flex
        height 38px
        line-height 38px
        bottom-border-1px(#e4e4e4)
      .nav-item
        width 33.3333333%
        text-align center
        a
          padding 0 10px 5px
          font-size 15px
        .router-link-active
          color: #02a774
          border-bottom 3px solid #02a774
</style>
