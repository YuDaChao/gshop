<template>
  <!--商品列表-->
  <div class="shop-container">
    <ul class="shop-list" v-if="shops.length">
      <li class="shop-item" v-for="(shop, index) in shops" :key="index">
        <div class="shop-left">
          <img :src="`${baseImgUrl}${shop.image_path}`" alt="#">
        </div>
        <div class="shop-right">
          <section class="shop-detail-header">
            <h4 class="shop-title">{{shop.name}}</h4>
            <ul class="shop-ul">
              <li class="supports" v-for="(support, index) in shop.supports" :key="index">
                {{support.icon_name}}
              </li>
            </ul>
          </section>
          <section class="shop-rate">
            <section class="shop-rate-left">
              <Star :size="36" :score="shop.rating" />
              <div class="rate-section">
                {{shop.rating}}
              </div>
              <div class="order-section">
                月售{{shop.recent_order_num}}单
              </div>
            </section>
            <section class="shop-rate-order-right">
              <span class="delivery-style delivery-right">蜂鸟快送</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥{{shop.float_minimum_order_amount}}起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥{{shop.float_delivery_fee}}</span>
            </p>
          </section>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li v-for="index in 6" :key="index"><img src="./images/shop_back.svg" alt="shop"></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Star from '../Star/Star'

export default {
  name: 'ShopList',
  components: {
    Star
  },
  computed: {
    ...mapState(['shops'])
  },
  data () {
    return {
      baseImgUrl: 'http://cangdu.org:8001/img/'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shop-container
    .shop-list
      .shop-item
        bottom-border-1px(#e4e4e4)
        padding 18px 8px
        clearFix()
        .shop-left
          float left
          width 73px
          height 75px
          img
            width 100%
            height 100%
        .shop-right
          overflow hidden
          padding-left 10px
          .shop-detail-header
            .shop-title
              float left
              width 50%
              color #333
              font-weight 700
              font-size 16px
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              &::before
                content '品牌'
                display inline-block
                font-size: 11px;
                line-height: 11px;
                color: #333;
                background-color: #ffd930;
                padding: 2px 2px;
                border-radius: 2px;
                margin-right: 5px;
            .shop-ul
              display flex
              justify-content flex-end
              .supports
                font-size 10px
                color #999
                border 1px solid #f1f1f1
                padding: 0 2px
                border-radius 2px
                margin-top 2px
          .shop-rate
            margin-top 18px
            margin-bottom 8px
            &::after
              content ''
              display block
              clear: both
            .shop-rate-left
              float left
              display flex
              align-items center
              margin-top 3px
              .rate-section
                font-size 10px
                color: #ff6000
                margin-left 4px
              .order-section
                font-size 10px
                color: #666
                transform scale(0.8)
            .shop-rate-order-right
              float right
              .delivery-right
                color #02a774
                border 1px solid #02a774
              .delivery-style
                display inline-block
                font-size 12px
                padding 1px
                border-radius 2px
          .shop_distance
            width 100%
            font-size 12px
            .shop_delivery_msg
              float left
              color: #666
              &::after
                content ''
                display block
                clear: both
              .segmentation
                color #ccc
</style>
