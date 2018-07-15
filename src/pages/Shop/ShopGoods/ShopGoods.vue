<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu-content">
        <li class="menu-item" v-for="(good, index) in shopGoods" :key="index">
          <span class="category">
            <img class="icon" :src="good.icon" alt="#" v-show="good.icon">
            <span class="name">{{good.name}}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li class="shop-good" v-for="(shopGood, index) in shopGoods" :key="index">
          <h1 class="title">{{shopGood.name}}</h1>
          <ul>
            <li class="food-item" v-for="(food, index) in shopGood.foods" :key="index">
              <div>
                <img class="icon" width="57" height="57" :src="food.image" alt="">
              </div>
              <div class="content">
                <div class="name">{{food.name}}</div>
                <div class="desc">{{food.description}}</div>
                <div class="extra">
                  <span class="sell-count">月售{{food.sellCount}}分</span>
                  <span class="rating">好评{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ShopGoods',
  data () {
    return {}
  },
  mounted () {
    // this.getShopGoods()
    this.$store.dispatch('getShopGoods', () => { // 更新数据后执行
      this.$nextTick(() => { // 页面渲染完成后执行
        new BetterScroll('.menu-wrapper')
        new BetterScroll('.foods-wrapper')
      })
    })
  },
  methods: {
    ...mapActions(['getShopGoods'])
  },
  computed: {
    ...mapState(['shopGoods'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display flex
    position absolute
    top 184px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-content
        width 100%
        .menu-item
          display table
          width 56px
          height 54px
          line-height 14px
          padding 0 12px
          bottom-border-1px(#ddd)
          .icon
            display inline-block
            vertical-align top
            width 12px
            height 12px
            background-size 12px 12px
            padding-top 1px
            background-repeat no-repeat
          .category
            display table-cell
            vertical-align middle
            font-size 12px
    .foods-wrapper
      flex 1
      .shop-good
        .title
          padding-left 14px
          height 26px
          line-height 26px
          border-left 2px solid #d9dde1
          font-size 12px
          color rgb(147, 153, 159)
          background #f3f5f7
        .food-item
          display flex
          margin 18px
          padding-bottom 18px
          bottom-border-1px(#ddd)
          &:last-child
            border none
            margin-bottom 0
          .icon
            flex 0 0 57px
            margin-right 10px
          .content
            flex 1
            .name
              margin 2px 0 8px
              height 14px
              line-height 14px
              font-size 14px
              color rgb(7, 17, 27)
            .desc, .extra
              margin-bottom 8px
              font-size 10px
              line-height 10px
              color rgb(147, 153, 159)
            .extra
              font-size 0
              .sell-count
                font-size 10px
                margin-right 12px
              .rating
                font-size 10px
            .price
              font-size 10px
              color rgb(147, 153, 159)
              font-weight 700
              .now
                margin-right 8px
                font-size 14px
                color rgb(240, 20, 20)
              .old
                text-decoration line-through
                font-size 10px
                color rgb(147, 153, 159)
</style>