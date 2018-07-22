<template>
  <div class="rating-select">
    <RatingHeader
      :selectType="selectType"
      :desc="desc"
      :ratings="ratings"
      :onlyContent="onlyContent"
      @handleChangeSelectType="handleChangeSelectType"
      @handleChangeToggle="handleChangeToggle"
    />
    <div class="rating-wrapper">
      <ul v-if="ratings.length">
        <li
          class="rating-item"
          v-for="(rating, index) in ratings"
          :key="index"
          v-show="needShow(rating.rateType, rating.text)"
        >
          <div class="user">
            <span class="name">{{rating.username}}</span>
            <img class="avatar" :src="rating.avatar" alt="">
          </div>
          <div class="time">{{rating.rateTime | formatDate}}</div>
          <p class="text">
            <span :class="{'icon-thumb_up': rating.rateType === 1, 'icon-thumb_down': rating.rateType === 0}"></span>
            {{rating.text}}
          </p>
        </li>
      </ul>
      <div class="no-rating" v-else>暂无评论</div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import RatingHeader from '../../components/RatingHeader/RatingHeader'

const ALL = 2

export default {
  name: 'RatingSelect',
  props: {
    // 评论列表
    ratings: {
      type: Array,
      default () {
        return []
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    // 是否只显示有评论的评论， 默认显示全部
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default () {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      }
    }
  },
  components: {
    RatingHeader
  },
  methods: {
    handleChangeSelectType (type) {
      // 注册一个自定义事件 通知父组件
      this.$emit('handleChangeSelectType', type)
    },
    handleChangeToggle () {
      // 注册一个自定义事件 通知父组件
      this.$emit('handleChangeToggle')
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
      return dayjs(date).format('YYYY-MM-DD hh:mm')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .rating-select
    .rating-wrapper
      padding 16px 0
      .rating-item
        position relative
        margin 0 18px
        padding 16px 0
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
        transition all 0.3s
        &.fade-enter-active, &.fade-leave-active
          opacity 1
        &.fade-enter, &.fade-leave-to
          opacity 0
      .user
        position absolute
        top 16px
        right 0
        line-height 12px
        .name
          display inline-block
          vertical-align top
          font-size 10px
          color rgb(147, 153, 159)
        .avatar
          width 12px
          height 12px
          border-radius 50%
      .time
        font-size 10px
        color rgb(147, 153, 159)
        line-height 12px
        margin-bottom 6px
      .text
        font-size 12px
        color: rgb(7, 17, 27)
        line-height 16px
        .icon-thumb_up, .icon-thumb_down
          line-height 24px
        .icon-thumb_down
          color rgb(147, 153, 159)
        .icon-thumb_up
          color: #02a774
      .no-rating
        font-size 12px
        color rgb(147, 153, 159)
</style>
