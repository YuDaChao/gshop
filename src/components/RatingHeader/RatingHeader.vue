<template>
  <div class="ratingHeader">
    <div class="rating-type">
      <span
        class="btn positive"
        :class="{active: selectType === 2}"
        @click="handleChangeSelectType(2)"
      >
        {{desc.all}}<span class="count">{{ratings.length}}</span>
      </span>
      <span
        class="btn positive"
        :class="{active: selectType === 1}"
        @click="handleChangeSelectType(1)"
      >
        {{desc.positive}}<span class="count">{{positives.length}}</span>
      </span>
      <span
        class="btn negative"
        :class="{active: selectType === 0}"
        @click="handleChangeSelectType(0)"
      >
        {{desc.negative}}<span class="count">{{negatives.length}}</span>
      </span>
    </div>
    <div
      class="switch"
      :class="{on: onlyContent}"
      @click="handleChangeToggle"
    >
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评论</span>
    </div>
  </div>
</template>

<script>
const POSITIVE = 1
const NEGATIVE = 0
const ALL = 2

export default {
  name: 'RatingHeader',
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
  methods: {
    handleChangeSelectType (type) {
      // 注册一个自定义事件 通知父组件
      this.$emit('handleChangeSelectType', type)
    },
    handleChangeToggle () {
      // 注册一个自定义事件 通知父组件
      this.$emit('handleChangeToggle')
    }
  },
  computed: {
    positives () {
      return this.ratings.filter(rating => rating.rateType === POSITIVE)
    },
    negatives () {
      return this.ratings.filter(rating => rating.rateType === NEGATIVE)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ratingHeader
    .rating-type
      margin 0 18px
      padding 18px 0
      font-size 0
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
      .btn
        font-size 12px
        color: rgb(77, 85, 93)
        display inline-block
        line-height 16px
        padding 8px 12px
        border-radius 2px
        &.active
          color: #fff
        .count
          font-size 8px
          margin-left 2px
        &.positive
          margin-right 8px
          background rgba(0, 160, 200, 0.2)
          &.active
            background rgba(0, 160, 200, 1)
        &.negative
          background rgba(77, 85, 93, 0.2)
          &.active
            background rgba(77, 85, 93, 1)
    .switch
      padding 12px 18px
      line-height 24px
      font-size 0
      color rgb(147, 153, 159)
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
      &.on
        .icon-check_circle
          color: #02a774
      .icon-check_circle
        font-size 24px
        margin-right 4px
        display: inline-block
        vertical-align: top
      .text
        font-size 12px
</style>
