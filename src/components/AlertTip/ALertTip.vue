<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confirm" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ALertTip',
  props: {
    alertText: String
  },
  methods: {
    closeTip () {
      // 分发自定义事件(事件名closeTip)
      this.$emit('closeTip')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  @keyframes tipMove
    0%
      transform scale(1)
    35%
      transform scale(.8)
    70%
      transform scale(1.1)
    100%
      transform scale(1)
  .alert_container
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 200
    background rgba(0, 0, 0, 0.5)
    .tip_text_container
      position absolute
      top 50%
      left 50%
      margin-top: -90px
      margin-left: -110px
      width 60%
      background #fff
      display flex
      justify-content center
      align-items center
      flex-direction column
      border-radius 5px
      animation: tipMove .4s;
      .tip_icon
        width 55px
        height 55px
        border 2px solid #f8cb86
        border-radius 50%
        display flex
        justify-content center
        align-items center
        flex-direction column
        margin 15px auto 10px
        span:nth-of-type(1)
          width: 2px
          height: 30px
          background-color: #f8cb86;
        span:nth-of-type(2)
          width: 2px
          height: 2px
          border: 1px;
          border-radius: 50%;
          margin-top: 2px
          background-color #f8cb86
      .tip_text
          font-size 16px
          text-align center
          color #333
      .confirm
          text-align center
          height 40px
          width 100%
          line-height 40px
          margin-top 10px
          font-size 18px
          font-weight bold
          color #fff
          background-color #4cd964
          border-bottom-left-radius 5px
          border-bottom-right-radius 5px
</style>
