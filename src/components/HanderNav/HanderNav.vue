<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header-title">
      <span class="header-title-text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: 'HanderNav',
  // 什么组件需要的Props
  props: {
    title: String
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
      left: 50%
      width 50%
      transform translate(-50%, -50%)
      .header-title-text
        display block
        width 100%
        text-align center
        font-size 20px
</style>
