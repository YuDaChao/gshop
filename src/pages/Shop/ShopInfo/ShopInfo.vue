<template>
  <transition name="ratingsFade">
    <div class="shop-info">
      <div class="shop-info-content">
        <div class="overview">
          <h1 class="title">{{shopInfo.name}}</h1>
          <div class="desc">
            <Star class="star" :size="36" :score="shopInfo.score" />
            <span class="ratingCount">({{shopInfo.ratingCount}})</span>
            <span class="sellerCount">月售{{shopInfo.sellCount}}单</span>
          </div>
          <div class="remark">
            <ul>
              <li class="block">
                <h1 class="title">起送价</h1>
                <div class="price"><span>{{shopInfo.minPrice}}</span>元</div>
              </li>
              <li class="block">
                <h1 class="title">商家配送</h1>
                <div class="price"><span>{{shopInfo.deliveryPrice}}</span>元</div>
              </li>
              <li class="block">
                <h1 class="title">平均配送时间</h1>
                <div class="price"><span>{{shopInfo.deliveryTime}}</span>分钟</div>
              </li>
            </ul>
          </div>
        </div>
        <Split/>
        <div class="bulletin-wrapper">
          <h1 class="title">活动公告</h1>
          <div class="bulletin">{{shopInfo.bulletin}}</div>
          <ul class="supports">
            <li class="support" v-for="(item, index) in shopInfo.supports" :key="index">
              <span class="icon" :class="iconMap[item.type]"></span><span class="content">{{item.content}}</span>
            </li>
          </ul>
        </div>
        <Split/>
        <div class="live">
          <h1 class="title">商家实景</h1>
          <div class="live-wrapper">
            <ul class="live-content" ref="picUl">
              <li class="pic-item" v-for="(pic, index) in shopInfo.pics" :key="index">
                <img class="img" :src="pic" alt="">
              </li>
            </ul>
          </div>
        </div>
        <Split/>
        <div class="shop-detail">
          <h1 class="title">商家信息</h1>
          <div class="detail-item">该商家支持开发票，请在下单时填写发票抬头</div>
          <div class="detail-item">品类: 其他菜系，包子粥店</div>
          <div class="detail-item">地址: {{shopInfo.address}}</div>
          <div class="detail-item">营业时间: {{shopInfo.workTime}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
import Star from '../../../components/Star/Star'
import Split from '../../../components/Split/Split'

export default {
  name: 'ShopInfo',
  components: {
    Star,
    Split
  },
  data () {
    return {
      iconMap: ['decrease', 'discount', 'grarantee', 'invoice', 'special']
    }
  },
  mounted () {
    this._initScroll()
    this._initPicScroll()
  },
  computed: {
    ...mapState(['shopInfo'])
  },
  watch: {
    shopInfo () {
      this._initScroll()
      this._initPicScroll()
    }
  },
  methods: {
    _initScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll('.shop-info', {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    },
    _initPicScroll () {
      if (this.shopInfo.pics) {
        let picWidth = 120
        let margin = 6
        let width = (picWidth + margin) * this.shopInfo.pics.length - margin
        this.$refs.picUl.style.width = width + 'px'
      }
      this.$nextTick(function () {
        if (!this.picScroll) {
          this.picScroll = new BScroll('.live-wrapper', {
            scrollX: true
          })
        } else {
          this.picScroll.refresh()
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .shop-info
    position fixed
    top 184px
    left 0
    bottom 0
    width 100%
    overflow hidden
    transition all 0.2s linear
    &.ratingsFade-enter-active, &.ratingsFade-enter-active
      transform translate3d(0, 0, 0)
    &.ratingsFade-enter, &.ratingsFade-enter-to
      transform translate3d(100%, 0, 0)
    .overview
      padding-top 18px
      margin 0 18px
      .title
        font-size 14px
        color: rgb(7, 17, 27)
        line-height 14px
        margin-bottom 8px
      .desc
        padding-bottom 18px
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
        .star
          display inline-block
          vertical-align middle
          margin-right 8px
        span
          font-size 10px
          color: rgb(77, 85, 93)
          line-height 18px
      .remark
        margin 18px 0
        ul
          display flex
          justify-content space-between
          text-align center
          .block:last-child
            border-right none
          .block
            flex 1
            border-right 1px solid rgba(7, 17, 27, 0.1)
            .title
              font-size 10px
              color: rgb(147, 153, 159)
              line-height 10px
              margin-bottom 4px
            .price
              font-weight 200
              color: rgb(7, 17, 27)
              span
                font-size 24px
                font-weight 200
                color: rgb(7, 17, 27)
                line-height 24px
    .bulletin-wrapper
      margin 18px 18px 0
      .title
        font-size 14px
        color: rgb(7, 17, 27)
        line-height 14px
        margin-bottom 8px
      .bulletin
        font-size 12px
        font-weight 200
        color rgb(240, 20, 20)
        line-height 24px
        padding 0 12px
        padding-bottom 16px
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
      .supports
        .support
          padding 16px 12px
          border-bottom 1px solid rgba(7, 17, 27, 0.1)
          &:last-child
            border-bottom none
          .icon
            display inline-block
            vertical-align middle
            width 16px
            height 16px
            margin-right 6px
            background-size 16px 16px
            background-repeat no-repeat
            &.decrease
              bg-image('./images/decrease_4')
            &.discount
              bg-image('./images/discount_4')
            &.grarantee
              bg-image('./images/guarantee_4')
            &.special
              bg-image('./images/special_4')
            &.invoice
              bg-image('./images/invoice_4')
          .content
            font-size 12px
            line-height 16px
            font-weight 200
            color rgb(7, 17, 27)
    .live
      margin 18px 0 18px 18px
      .title
        font-size 14px
        color: rgb(7, 17, 27)
        line-height 14px
        margin-bottom 12px
      .live-wrapper
        width 100%
        overflow hidden
        white-space nowrap
        .live-content
          .pic-item
            display inline-block
            width 120px
            height 90px
            margin-right 6px
          .img
            width 120px
            height 90px
    .shop-detail
      margin 18px 18px 0
      .title
        font-size 14px
        color: rgb(7, 17, 27)
        line-height 14px
        padding-bottom 12px
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
      .detail-item
        font-size 12px
        font-weight 200
        color: rgb(7, 17, 27)
        line-height 16px
        padding 16px 12px
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
        &:last-child
          border-bottom none
</style>
