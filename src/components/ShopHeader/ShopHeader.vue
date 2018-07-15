<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="shopInfo.avatar" alt="#">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{shopInfo.name}}</span>
        </div>
        <div class="description">
          {{shopInfo.description}}/{{shopInfo.deliveryTime}}分钟
        </div>
        <div class="support" v-if="shopInfo.supports">
          <span class="icon" :class="iconMap[shopInfo.supports[0].type]"></span>
          <span class="text">{{shopInfo.supports[0].content}}</span>
        </div>
      </div>
      <div class="support-count" v-if="shopInfo.supports" @click="showDetail = !showDetail">
        <span class="count">{{shopInfo.supports.length}}个</span>
        <i class="iconfont icon-jiantou1"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail = !showDetail">
      <span class="bulletin-icon"></span>
      <span class="bulletin-text">{{shopInfo.bulletin}}</span>
      <i class="iconfont icon-jiantou1"></i>
    </div>
    <div class="bg">
      <img :src="shopInfo.avatar" alt="#">
    </div>
    <transition name="fade">
      <div class="detail" v-show="showDetail">
        <div class="detail-wrapper">
          <div class="detail-main">
            <div class="name">{{shopInfo.name}}</div>
            <div class="star-wrapper">
              <Star :score="shopInfo.score" :size="48" />
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports-wrapper" v-if="shopInfo.supports">
              <li class="support-item" v-for="(item, index) in shopInfo.supports" :key="index">
                <span class="icon" :class="iconMap[shopInfo.supports[index].type]"></span>
                <span class="desc">{{item.content}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulltein">
              <p class="content">{{shopInfo.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close">
          <i class="iconfont icon-close" @click="showDetail = !showDetail"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Star from '../Star/Star'

export default {
  name: 'ShopHeader',
  components: {
    Star
  },
  props: {
    shopInfo: Object
  },
  data () {
    return {
      iconMap: ['decrease', 'discount', 'grarantee', 'invoice', 'special'],
      showDetail: false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    position relative
    color: #fff
    background rgba(7,17,17,0.5)
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        vertical-align top
        border-radius 2px
        img
          border-radius 2px
      .content
        display inline-block
        font-size 14px
        margin-left 16px
        .title
          padding 2px 0 8px
          .brand
            display inline-block
            width 30px
            height 18px
            vertical-align top
            bg-image('./images/brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            font-size 16px
            color: #fff
            font-weight bold
            line-height 18px
            margin-left 6px
        .description
          font-size 12px
          color: #fff
          font-weight 200
          line-height 12px
          margin 0 0 10px
        .support
          .icon
            display inline-block
            vertical-align middle
            width 12px
            height 12px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('./images/decrease_1')
            &.discount
              bg-image('./images/discount_1')
            &.grarantee
              bg-image('./images/guarantee_1')
            &.special
              bg-image('./images/special_1')
            &.invoice
              bg-image('./images/invoice_1')
          .text
            font-size 10px
            color: #fff
            font-weight 200
            line-height 12px
      .support-count
        position absolute
        right 12px
        bottom 14px
        height 24px
        padding 0 8px
        line-height 24px
        border-radius 14px
        background rgba(0,0,0,0.2)
        text-align center
        cursor pointer
        .count
          font-size 10px
        .icon-jiantou1
          font-size 10px
          margin-left 3px
    .bulletin-wrapper
      position relative
      height 28px
      line-height 28px
      padding 6px 22px 6px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      background rgba(7,17,17,0.2)
      cursor pointer
      .bulletin-icon
        display inline-block
        width 22px
        height 12px
        bg-image('./images/bulletin')
        background-size 22px 12px
        background-repeat no-repeat
        vertical-align top
        margin-top 7px
      .bulletin-text
        font-size 10px
        vertical-align top
      .icon-jiantou1
        position absolute
        font-size 10px
        right 12px
    .bg
      img
        width 100%
        height 100%
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
    .detail
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      z-index 9999
      overflow auto
      background rgba(7,17,27,0.8)
      &.fade-enter-active, &.fade-leave-active
        transition all 0.5s
        opacity 1
        background rgba(7,17,27,0.8)
      &.fade-enter, &.fade-leave-to
        opacity 0
        background rgba(7,17,27,0)
      .detail-wrapper
        min-height 100%
        width 100%
        .detail-main
          padding 64px 0
          .name
            font-size 16px
            line-height 16px
            text-align center
          .star-wrapper
            margin-top 18px
            text-align center
            padding 2px 0
          .title
            display flex
            width 80%
            margin 30px auto 24px
            .text
              font-size 16px
              padding 0 12px
            .line
              flex 1
              position relative
              top -7px
              border-bottom 1px solid rgba(255,255,255,0.2)
          .supports-wrapper
            width 80%
            margin 0 auto
            .support-item
              margin-bottom 12px
              padding 0 12px
              &::last-child
                margin-bottom 0
              .icon
                display inline-block
                vertical-align top
                width 16px
                height 16px
                background-size 16px 16px
                background-repeat no-repeat
                &.decrease
                  bg-image('./images/decrease_2')
                &.discount
                  bg-image('./images/discount_2')
                &.grarantee
                  bg-image('./images/guarantee_2')
                &.special
                  bg-image('./images/special_2')
                &.invoice
                  bg-image('./images/invoice_2')
              .desc
                padding-left 6px
          .bulltein
            width 80%
            margin 0 auto
            .content
              line-height 24px
              padding 0 12px
      .detail-close
        width 32px
        height 32px
        margin -64px auto 0
</style>
