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
        <form @submit.prevent="login">
          <!--短信登录-->
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button
                :disabled="codeBtnDisabled"
                class="verification"
                :class="{'verification-active': !codeBtnDisabled}"
                @click.prevent="getCode"
              >
                {{timeDown ? `已发送(${timeDown}s)` : '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
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
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button" :class="showPwd ? 'on' : 'off'" @click="showPwd = !showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '***'}}</span>
                </div>
              </section>
              <section class="login_message login_captcha">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img @click="getPicCaptcha" ref="captcha" class="verification" src="http://localhost:4000/captcha" alt="captcha">
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
    <AlertTip :alertText="tipText" v-show="showTip" @closeTip="closeTip" />
  </section>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
import AlertTip from '../../components/AlertTip/ALertTip'

import { sendPhoneCode } from '../../api'

export default {
  name: 'Login',
  components: {
    AlertTip
  },
  mounted () {
    // this.getPicCaptcha()
  },
  data () {
    return {
      loginWay: true, // true表示短信登录  false密码登录
      showPwd: false, // false不显示密码  true显示密码
      phone: '', // 电话号码
      code: '', // 短信验证码
      name: '', // 用户名
      pwd: '', // 密码
      captcha: '', // 图片验证码
      timeDown: 0,
      showTip: false,
      tipText: ''
    }
  },
  methods: {
    async getCode () {
      const result = await sendPhoneCode(this.phone)
      if (result && result.code === 1) {
        this.showALertTip(result.msg)
      } else {
        // 如果当前时间为0 则不重新计时
        if (!this.timeDown) {
          this.timeDown = 30
          this.codeBtnDisabled = true
          // 倒计时
          const intervalId = setInterval(() => {
            this.timeDown--
            if (this.timeDown <= 0) {
              clearInterval(intervalId)
            }
          }, 1000)
        }
      }
    },
    getPicCaptcha () {
      this.$refs.captcha.src = `http://localhost:4000/captcha?time=${Date.now()}`
    },
    showALertTip (tipText) {
      this.showTip = true
      this.tipText = tipText
    },
    closeTip () {
      this.showTip = false
      this.tipText = ''
    },
    login () {
      if (this.loginWay) {
        // 短信登录
        const { codeBtnDisabled, phone, code } = this
        if (!phone) {
          this.showALertTip('手机号不能为空')
        } else if (codeBtnDisabled) {
          // 手机格式错误
          this.showALertTip('手机号格式错误')
        } else if (!/^\d{6}$/.test(code)) {
          // 验证码错误
          this.showALertTip('验证码错误')
        }
      } else {
        // 账号登录
        const { name, pwd, captcha } = this
        if (!/^\w{4}$/.test(captcha)) {
          // 验证码输入错误
          this.showALertTip('验证码输入错误')
        } else if (!name || !pwd) {
          // 信息不完整
          this.showALertTip('信息不完整')
        }
      }
    }
  },
  computed: {
    codeBtnDisabled: {
      get: function () {
        return !/^1[3|4|5|8][0-9]\d{8}$/.test(this.phone)
      },
      set: function (val) {
        // do something
      }
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
          .verification-active
            color black
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
