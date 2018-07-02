<template>
  <!--首页-->
  <div class="msite">
    <!--首页头部-->
    <HanderNav :title="address.name">
      <span class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header-login" slot="right" @click="goLogin()">
        <span class="header-login-text">登录 | 注册</span>
      </span>
    </HanderNav>
    <!--首页头部-->
    <div class="msite-nav">
      <div class="swiper-container" v-if="isLoading">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
           <a href="javascript:" class="nav-item" v-for="(category, index) in categorys" :key="index">
             <img :src="baseImgUrl+category.image_url" alt="#">
             <span>{{category.title}}</span>
           </a>
         </div>
       </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="nav-loading-bg" v-else></div>
    </div>
    <!--首页附近商家-->
    <div class="msite-shop-list">
      <div class="shop-header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop-header-title">附近商家</span>
      </div>
      <!--商品列表-->
      <ShopList />
    </div>
    <div id="allmap"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HanderNav from '../../components/HanderNav/HanderNav'
import ShopList from '../../components/ShopList/ShopList'

export default {
  name: 'MSite',
  components: {
    HanderNav,
    ShopList
  },
  mounted () {
    this.getAddress()
    this.getCategory()
    this.getShops()
  },
  methods: {
    ...mapActions(['getAddress', 'getCategory', 'getShops']),
    goLogin () {
      this.$router.push('/login')
    }
  },
  watch: {
    categorys () {
      // 界面更新后立即执行
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  computed: {
    ...mapState(['address', 'categorys']),
    categorysArr () {
      const arr = []
      for (let i = 0; i < this.categorys.length; i += 8) {
        arr.push(this.categorys.slice(i, i + 8))
      }
      return arr
    },
    isLoading () {
      return this.categorys.length
    }
  },
  data () {
    return {
      baseImgUrl: 'https://fuss10.elemecdn.com'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    padding-bottom 50px
    .header
      position fixed
      top: 0
      left 0
      right 0
      z-index 99999
      height 45px
      background-color #02a774
      span
        color #fff
      .header-search
        position absolute
        left 15px
        top: 50%
        color #fff
        transform translateY(-50%)
        .iconfont
          font-size 20px
      .header-login
        position absolute
        right 15px
        top 50%
        font-size 14px
        transform translateY(-50%)
      .header-title
        position absolute
        top 50%
        width 100%
        box-sizing border-box
        transform translateY(-50%)
        padding: 0 100px 0 45px
        .header-title-text
          display block
          width 100%
          text-align center
          font-size 20px
    .msite-nav
      width 100%
      height 195px
      margin-top 45px
      background-color #fff
      .swiper-container
        width 100%
      .swiper-pagination
        padding 10px 0
        bottom-border-1px(#e4e4e4)
      .swiper-slide
        width 100%
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .nav-item
          width 25%
          display block
          text-align center
          margin-top 10px
          img
            width 50px
            height 50px
            margin-bottom 10px
          span
            display block
            color #666
            font-size 13px
      .nav-loading-bg
        background url("./images/msite_back.svg") no-repeat
        height 100%
        width 100%
    .msite-shop-list
      background-color #fff
      margin-top 10px
      top-border-1px(#e4e4e4)
      .shop-header
        padding 10px 10px 0 10px
      .icon-xuanxiang
          color: #999
        .shop-header-title
          color #999
          font-size 14px
</style>
