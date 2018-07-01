<template>
    <div class="profile">
      <HeaderNav title="我的"/>
      <section class="profile-account">
        <a href="#" class="profile-link">
          <div class="profile-avatar">
            <i class="iconfont icon-person"></i>
          </div>
          <div class="user-info">
            <p class="user-info-top">登录/注册</p>
            <p class="profile-number">
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
              <span class="icon-mobile-number">暂无绑定手机号</span>
            </p>
          </div>
          <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
            </span>
        </a>
      </section>
      <section class="profile_info_data border-1px">
        <ul class="info_data_list">
          <a href="javascript:" class="info_data_link">
            <p class="info_data_top"><span class="origin">0.00</span>元</p>
            <p class="info_data_bottom">我的余额</p>
          </a>
          <a href="javascript:" class="info_data_link">
            <p class="info_data_top"><span class="red">0</span>个</p>
            <p class="info_data_bottom">我的优惠</p>
          </a>
          <a href="javascript:" class="info_data_link no-border-right">
            <p class="info_data_top"><span class="green">0</span>分</p>
            <p class="info_data_bottom">我的积分</p>
          </a>
        </ul>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 我的订单 -->
        <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-order-s"></i>
            </span>
          <div class="my_order_div">
            <span>我的订单</span>
            <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
          </div>
        </a>
        <!-- 积分商城 -->
        <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
          <div class="my_order_div">
            <span>积分商城</span>
            <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
          </div>
        </a>
        <!-- 硅谷外卖会员卡 -->
        <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
          <div class="my_order_div">
            <span>硅谷外卖会员卡</span>
            <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
          </div>
        </a>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 服务中心 -->
        <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
          <div class="my_order_div">
            <span>服务中心</span>
            <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
          </div>
        </a>
      </section>
    </div>
</template>

<script>
import HeaderNav from '../../components/HanderNav/HanderNav'

export default {
  name: 'Profile',
  components: {
    HeaderNav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile
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
    .profile-account
      padding-top 46px
      .profile-link
        position relative
        display block
        background-color #02a774
        padding 20px 10px
        &::after
          content ''
          display block
          clear both
        .profile-avatar
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          float left
          .icon-person
            font-size 60px
            background-color #e4e4e4
        .user-info
          overflow hidden
          padding-left 15px
          margin-top 7px
          .user-info-top
            padding-bottom 15px
          .user-info-top, .profile-number
            color: #fff
          .profile-number
            margin-left -15px
            .user-icon
              float left
              width 20px
              height 24px
              margin-right 10px
              margin-top -5px
            .icon-mobile
              font-size 30px
            .icon-mobile-number
              font-size 14px
              /*vertical-align text-bottom*/

      .arrow
        position absolute
        right 15px
        top 50%
        margin-top -8px
        .icon-jiantou1
          color #fff
          font-size 6px
    .profile_info_data
      background-color #fff
      width 100%
      .info_data_list
        width 100%
        display flex
        justify-content center
        text-align center
        .info_data_link
          width 33.333333%
          padding 10px 0
          border-right 1px solid #f1f1f1
          .info_data_top
            padding 5px 0 10px
            .origin
              color #f90
            .red
              color #ff5f3e
            .green
              color #6ac20b
            span
              font-size 30px
              font-weight 700
          .info_data_bottom
            font-size 14px
            color: #666
            font-weight 400
        .no-border-right
          border-right none
    .profile_my_order
      margin-top 10px
      background-color #fff
      & > a
        padding-left 15px
      .my_order
        display flex
        align-items center
        .my_order_div
          width 100%
          display flex
          justify-content space-between
          padding 18px 15px 18px 0
          font-size 16px
          color: #666
          border-bottom  1px solid #f1f1f1
          .icon-jiantou1
            font-size 10px
      .icon-order-s, .icon-jifen, .icon-vip, .icon-fuwu
        font-size 30px
        display flex
      .icon-order-s, .icon-fuwu
        color: #6ac20b
      .icon-jifen
        color #ff5f3e
      .icon-vip
        color #f90
</style>
