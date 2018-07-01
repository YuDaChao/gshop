<template>
    <div class="order">
      <HeaderNav title="订单列表"/>
      <section class="no-login">
        <img class="not-found" src="./images/person.png" alt="">
        <h3>登录后查看外卖订单</h3>
        <button>立即登录</button>
      </section>
    </div>
</template>

<script>
import HeaderNav from '../../components/HanderNav/HanderNav'

export default {
  name: 'Order',
  components: {
    HeaderNav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .order
    width 100%
    height 100%
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
      .header-title
        position absolute
        top 50%
        width 100%
        box-sizing border-box
        transform translateY(-50%)
        .header-title-text
          display block
          width 100%
          text-align center
          font-size 20px
    .no-login
      width 60%
      padding-top 130px
      text-align center
      margin auto
      .not-found
        display block
        width 100%
        height 30%
      h3
        margin 10px 0
        font-size 17px
        color: #6a6a6a
        text-align center
      button
        background-color #02a774
        font-size 14px
        color: #fff
        outline none
        padding 10px 20px
        border-radius 5px
        margin 0 auto
</style>
