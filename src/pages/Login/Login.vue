<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
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
          <div style="display: none">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码">
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get_verification" src="./images/captcha.svg" alt="captcha">
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
  name: 'Login'
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
          a
            font-size 14px
          .on
            color: #02a774
            border-bottom 2px solid #02a774
            margin-right 30px
      .login_content
        margin-top 16px
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
            padding-left: 4px
            outline none
          .verification
            position absolute
            right 10px
            top 50%
            transform translateY(-50%)
            border 0
            font-size 14px
            color: #ccc
            background-color transparent
        .login_verification
          margin-top 16px
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
