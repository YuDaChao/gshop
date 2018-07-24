<template>
  <transition name="move">
    <div class="food-wrapper" v-show="show">
      <div class="food-detail">
        <div class="food-content">
          <div class="img-header">
            <img :src="food.image" alt="">
            <div class="back" @click="handleClickBack">
              <i class="icon-arrow_lift"></i>
            </div>
          </div>
          <div class="content">
            <h1 class="name">{{food.name}}</h1>
            <div class="extr">
              <span class="sellCount">月售{{food.sellCount}}分</span>
              <span class="rating">好评率{{food.rating}}%</span>
            </div>
            <div class="price">
              <span class="now">¥{{food.price}}</span>
              <span class="old" v-if="food.oldPrice">¥{{food.oldPrice}}</span>
            </div>
            <div class="cart-controll">
              <CartControl :food="food" />
            </div>
            <transition name="fade">
              <div class="buy" v-show="!food.count" @click="addCart">加入购物车</div>
            </transition>
          </div>
        </div>
        <Split v-show="food.info" />
        <div class="info">
          <h1>商品介绍</h1>
          <span>{{food.info}}</span>
        </div>
        <Split />
        <div class="rating">
          <h1 class="title">商品评论</h1>
          <RatingSelect
            :selectType="selectType"
            :desc="desc"
            :ratings="food.ratings"
            :onlyContent="onlyContent"
            @handleChangeSelectType="handleChangeSelectType"
            @handleChangeToggle="handleChangeToggle"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BetterScroll from 'better-scroll'
import CartControl from '../../components/CartControl/CartControl'
import Split from '../../components/Split/Split'
import RatingSelect from '../../components/RatingSelect/RatingSelect'

const ALL = 2

export default {
  name: 'Food',
  props: {
    food: {
      type: Object
    }
  },
  components: {
    CartControl,
    Split,
    RatingSelect
  },
  data () {
    return {
      show: false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  methods: {
    showFood () {
      this.show = true
      // 重新初始化
      this.selectType = ALL
      this.onlyContent = true
      this.$nextTick(function () {
        if (!this.scroll) {
          this.scroll = new BetterScroll('.food-wrapper', {
            click: true
          })
        } else {
          // 重新计算better-scroll
          this.scroll.refresh()
        }
      })
    },
    handleClickBack () {
      this.show = false
    },
    addCart () {
      const isAdd = true
      this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
    },
    handleChangeSelectType (type) {
      this.selectType = type
    },
    handleChangeToggle () {
      this.onlyContent = !this.onlyContent
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .food-wrapper
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 9999
    background #fff
    &.move-enter-active, &.move-leave-active
      transition all 0.3s linear
      transform translate3d(0, 0, 0)
    &.move-enter, &.move-leave-to
      transform translate3d(100%, 0, 0)
    .img-header
      position relative
      width 100%
      height 0
      padding-top 100%
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
      .back
        position absolute
        top 10px
        left 0
        .icon-arrow_lift
          padding 10px
          font-size 20px
          color: #fff
    .content
      position relative
      padding 18px
      .name
        font-size 14px
        font-weight 700
        color: rgb(7, 17, 27)
        line-height 14px
        margin-bottom 8px
      .extr
        margin-bottom 18px
        height 10px
        line-height 10px
        font-size 0
        .sellCount, .rating
          font-size 10px
          color rgb(147, 153, 159)
        .sellCount
          margin-right 12px
      .price
        font-weight 700
        line-height 24px
        .now
          font-size 14px
          color: rgb(240, 20, 20)
        .old
          font-size 10px
          color rgb(147, 153, 159)
          text-decoration line-through
      .cart-controll
        position absolute
        right 18px
        bottom 18px
      .buy
        position absolute
        right 18px
        bottom 18px
        z-index 999999
        height 24px
        line-height 24px
        padding 0 12px
        box-sizing border-box
        border-radius 12px
        font-size 10px
        color #fff
        background #02a774
        transition all 0.3s
        &.fade-enter-active, &.fade-leave-active
          opacity 1
        &.fade-enter, &.fade-leave-to
          opacity 0
    .info
      padding 18px
      h1
        font-size 14px
        font-weight 400
        margin-bottom 6px
      span
        font-size 12px
        font-weight 200
        color rgb(77, 85, 93)
        line-height 24px
    .rating
      margin-top 18px
      .title
        font-size 14px
        font-weight 400
        margin-left 18px
</style>
