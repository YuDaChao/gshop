<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay = true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay = false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <!--短信登录-->
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="verification">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!--密码登录-->
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码">
                <div class="switch_button" :class="showPwd ? 'on' : 'off'" @click="showPwd = !showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '***'}}</span>
                </div>
              </section>
              <section class="login_message login_captcha">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="verification" src="./images/captcha.svg" alt="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginWay: true, // true表示短信登录  false密码登录
      showPwd: false // false不显示密码  true显示密码
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    width 100%
    height 100%
    background-color #fff
    .loginInner
      width 80%
      margin auto
      padding-top 60px
      .login_header
        width 100%
        .login_logo
          font-size 40px
          color: #02a774
          text-align center
          font-weight 700
        .login_header_title
          margin-top 40px
          width 100%
          text-align center
          font-weight 700
          & > a
            margin-right 30px
          a
            font-size 14px
          .on
            color: #02a774
            border-bottom 2px solid #02a774
      .login_content
        margin-top 16px
        >form
          >div
            display none
            &.on
              display block
        .login_message, .login_verification
          position relative
          height 48px
          font-size 14px
          background-color #fff
          input
            width 100%
            height 100%
            border 1px solid #ddd
            border-radius 4px
            padding-left: 10px
            outline none
            &:focus
              border 1px solid #02a774
          .verification
            position absolute
            right 10px
            top 50%
            transform translateY(-50%)
            border 0
            font-size 14px
            color: #ccc
            background-color transparent
        .login_verification, .login_captcha
          position relative
          margin-top 16px
          .verification
            right -10px
          .switch_button
            &.on
              background-color #02a774
              .switch_text
                float left
                color: #fff
                padding-left 2px
            &.off
              background-color #fff
              .switch_text
                float right
                color: #ccc
                margin-top 2px
          .switch_button
            font-size 12px
            border 1px solid #ddd
            border-radius 8px
            width 40px
            height 16px
            line-height 16px
            color: #fff
            position absolute
            top 50%
            right 10px
            transform translateY(-50%)
            .switch_circle
              position absolute
              top -1px
              left -1px
              width 16px
              height 16px
              border 1px solid #ddd
              border-radius 50%
              background-color #fff
              box-shadow 0 2px 4px 0 rgba(0,0,0,0.1)
              transition transform 0.3s
              &.right
                transform translateX(24px)
        .login_hint
          color: #999
          font-size 14px
          margin-top 12px
          line-height 20px
          a
            color: #02a774
        .login_submit
          width 100%
          height 42px
          color #fff
          background-color #4cd96f
          border none
          border-radius 5px
          margin-top 30px
          font-size 16px
      .about_us
        display block
        width 100%
        text-align center
        margin-top 10px
        font-size 14px
        color: #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        .icon-jiantou2
          font-size 20px
          color: #999
</style>
