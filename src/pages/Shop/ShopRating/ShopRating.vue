<template>
  <transition name="ratingsFade">
    <div class="ratings">
      <div class="rating-content">
        <div class="overview">
          <div class="overview-left">
            <h1 class="score">{{shopInfo.score}}</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家<span>{{shopInfo.rankRate}}%</span></div>
          </div>
          <div class="overview-right">
            <div class="score-wrapper">
              <span class="title">服务态度</span>
              <Star class="star" :size="36" :score="shopInfo.serviceScore" />
              <span class="score">{{shopInfo.serviceScore}}</span>
            </div>
            <div class="score-wrapper">
              <span class="title">商品评分</span>
              <Star class="star" :size="36" :score="shopInfo.foodScore" />
              <span class="score">{{shopInfo.foodScore}}</span>
            </div>
            <div class="score-wrapper">
              <span class="title">送达时间</span>
              <span class="time">{{shopInfo.deliveryTime}}分钟</span>
            </div>
          </div>
        </div>
        <Split />
        <RatingHeader
          :selectType="selectType"
          :desc="desc"
          :ratings="shopRatings"
          :onlyContent="onlyContent"
          @handleChangeSelectType="handleChangeSelectType"
          @handleChangeToggle="handleChangeToggle"
        />
        <div class="comments-wrapper">
          <ul>
            <li
              class="comment-item"
              v-for="(item, index) in shopRatings"
              :key="index"
              v-show="needShow(item.rateType, item.text)"
            >
              <div class="user">
                <div class="user-left">
                  <img class="avatar" :src="item.avatar" alt="">
                  <div class="info">
                    <div class="username">{{item.username}}</div>
                    <div class="score-wrapper">
                      <Star class="score" :score="item.score" :size="24"/>
                      <span class="min">{{item.deliveryTime}}分钟送达</span>
                    </div>
                  </div>
                </div>
                <div class="time">{{item.rateTime | formatDate}}</div>
              </div>
              <div class="text">{{item.text}}</div>
              <div class="recommend">
                <span :class="{'icon-thumb_up': item.rateType === 1, 'icon-thumb_down': item.rateType === 0}"></span>
                <span class="tag" v-for="(tag, index) in item.recommend" :key="index">{{tag}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
import dayjs from 'dayjs'
import { mapState, mapActions } from 'vuex'
import Star from '../../../components/Star/Star'
import Split from '../../../components/Split/Split'
import RatingHeader from '../../../components/RatingHeader/RatingHeader'

const ALL = 2

export default {
  name: 'ShopRating',
  components: {
    Star,
    Split,
    RatingHeader
  },
  data () {
    return {
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  mounted () {
    this.getShopRatings()
    this._initScroll()
  },
  computed: {
    ...mapState(['shopRatings', 'shopInfo'])
  },
  watch: {
    shopRatings () {
      this._initScroll()
    }
  },
  methods: {
    ...mapActions(['getShopRatings']),
    _initScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll('.ratings', {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    },
    handleChangeSelectType (type) {
      this.selectType = type
    },
    handleChangeToggle () {
      this.onlyContent = !this.onlyContent
    },
    needShow (type, text) {
      if (this.onlyContent && !text) {
        return false
      }
      if (this.selectType === ALL) {
        return true
      }
      if (this.selectType === type) {
        return true
      }
    }
  },
  filters: {
    formatDate (date) {
      return dayjs(date).format('YYYY-MM-DD hh:ss')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ratings
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
      display flex
      padding 18px 0
      .overview-left
        flex 0 0 137px
        text-align center
        padding 6px 0
        border-right 1px solid rgb(147, 153, 159)
        .score
          font-size 24px
          color: rgb(255, 153, 0)
          line-height 28px
          margin-bottom 6px
        .title
          font-size 12px
          color: rgb(7, 17, 27)
          line-height 12px
          margin-bottom 8px
        .rank
          font-size 10px
          line-height 10px
          color rgb(147, 153, 159)
      .overview-right
        flex 1
        padding 6px 24px
        .score-wrapper
          margin-bottom 8px
          .title
            font-size 12px
            color: rgb(7, 17, 27)
            line-height 18px
            margin-right 12px
          .star
            display inline-block
            vertical-align middle
            margin-right 12px
          .score
            font-size 12px
            color: rgb(255, 153, 0)
          .time
            font-size 14px
            color rgb(147, 153, 159)
        .score-wrapper:last-child
          margin-bottom 0
    .comments-wrapper
      .comment-item
        padding 18px 0
        margin 0 18px
        border-bottom 1px solid rgba(147, 153, 159, 0.2)
        .user
          display flex
          justify-content space-between
          margin-bottom 6px
          .user-left
            display flex
            align-items center
            .avatar
              width 28px
              height 28px
              margin-right 12px
              border-radius 50%
            .username
              font-size 10px
              line-height 12px
              margin-bottom 4px
              color: rgb(7, 17, 27)
            .score-wrapper
              .score
                display inline-block
              .min
                font-size 10px
                font-weight 200
                color: rgb(147, 153, 159)
                line-height 12px
          .time
            font-size 10px
            font-weight 200
            color rgb(147, 153, 159)
            line-height 12px
        .text
          font-size 12px
          line-height 18px
          margin-left 40px
          margin-bottom 8px
          color: rgb(7, 17, 27)
        .recommend
          margin-left 40px
          .icon-thumb_up, .icon-thumb_down
            display inline-block
            vertical-align middle
          .icon-thumb_up
            color: #02a774
          .icon-thumb_down
            color rgb(147, 153, 159)
          .tag
            display inline-block
            font-size 9px
            color rgb(147, 153, 159)
            line-height 16px
            margin-right 8px
            padding 0 6px
            border 1px solid rgba(7, 17, 27, 0.1)
            border-radius 2px
            background rgb(255, 255, 255)
</style>
