<template>
<div class="login box-flex">
  <div class="login-content">
    <div>
      <input v-model="idCard" placeholder="请输入身份证号" autocomplete="off" type="number">
    </div>
    <div>
      <input v-model="phoneNumber" placeholder="请输入手机号" autocomplete="off" type="number">
      <span style="width: 2.5rem; text-align: center" @click="sendCode">{{sendText + (sendLogding ? '（' + time + '）' : '')}}</span>
    </div>
    <div>
      <input v-model="code" placeholder="请输入验证码" autocomplete="off" type="text">
    </div>
    <div class="login" @click="login">登录</div>
  </div>
  <div class="bottom-title" style="width: 100%">
    <span>泰康，用心为您</span>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      idCard: '',
      phoneNumber: '',
      code: '',
      sendText: '发送验证码',
      time: 60,
      sendLogding: false,
      interval: '',
      str: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
      strs: /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/,
      num: /^[1][3,4,5,7,8][0-9]{9}$/
    }
  },
  mounted () {},
  methods: {
    sendCode () {
      //
      // if (this.sendLogding) {
      //   return
      // }
      if (this.phoneNumber.length !== 11) {
        return
      }
      if (this.num.test(this.phoneNumber)) {

      } else {
        return
      }
      if (this.idCard) {
        this.login()
      } else {
      }
      // // this.sendText = '已发送'
      // // this.sendLogding = true
      // // this.interval = setInterval(() => {
      // //   this.time--
      // //   if (this.time === 57) {
      // //     // this.$toast('1234')
      // //   }
      // //   if (this.time === -1) {
      // //     clearInterval(this.interval)
      // //     this.sendLogding = false
      // //     this.sendText = '重新发送'
      // //     this.time = 60
      // //   }
      // // }, 1000)
    },

    login () {
      // let kv
      if (this.idCard.length === 15 || this.idCard.length === 18) {
        if (this.str.test(this.idCard) || this.strs.test(this.idCard)) {
          // this.$toast('您的身份证号还未在海宝计划中注册，请联系您的HR注册信息')
        } else {
          // this.$toast('请输入正确的15位或18位身份证号')
        }
        // this.$store.commit('login', '' + this.idCard)
        // kv = {'status': '1', 'phoneNumber': '' + this.phoneNumber}
        // this.$router.push({path: '/home'})
      } else {
        // this.$toast('请输入正确的15位或18位身份证号')
        // kv = {'status': '0', 'phoneNumber': '' + this.phoneNumber, 'error': '身份证号格式错误'}
      }
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.login {
  height: 100%;
  background: url('./loginbg.png') no-repeat;
  background-size: 100%;
  justify-content: center;
  align-items: flex-end;
  align-content: flex-end;
  flex-wrap: wrap;
  .login-content {
    width: 5.93rem;
    flex: 0 1 auto;
    &>div {
      height: .88rem;
      margin-top: .24rem;
      border-radius: .44rem;
      border: 1px solid #ffffff;
      input {
        background-color: transparent;
        padding: .15rem .3rem;
        line-height: .5rem;
        color: #ffffff;
        font-size: .32rem;
        &::-webkit-input-placeholder {
          color: #ffffff;
        }
        /* WebKit browsers */
        &:focus::-webkit-input-placeholder { color:transparent; }

        /* Mozilla Firefox 4 to 18 */
        &:focus:-moz-placeholder { color:transparent; }

        /* Mozilla Firefox 19+ */
        &:focus::-moz-placeholder { color:transparent; }

        /* Internet Explorer 10+ */
        &:focus:-ms-input-placeholder { color:transparent; }
      }
      &:nth-child(2) {
        position: relative;
        input {
          width: 60%;
        }
        span {
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          font-size: .32rem;
          padding:0 .24rem;
          line-height: .88rem;
          color: #ffffff;
          &:before {
            position: absolute;
            left: 0;
            top: .25rem;
            content: '';
            display: inline-block;
            height: .32rem;
            width: 2px;
            background-color:#ffffff;
          }
        }
      }
      &:last-child {
        font-size: .32rem;
        line-height: .9rem;
        color: #ffffff;
        margin-top: .5rem;
        background: linear-gradient(left, #04DF8E, #14CAA9);
        background: -moz-linear-gradient(left, #04df8e, #14caa9);
        background: -o-linear-gradient(left,#04df8e, #14caa9);
        background: -webkit-gradient(linear, 0% 0%, 100% 100%, from(#04df8e), to(#14caa9));
        border: none;
      }
    }
  }
  .bottom-title {
    padding: .68rem 0 .4rem 0;
    span {
      color: #C9D2D9;
      font-size: .24rem;
      &:before, &:after {
        display: inline-block;
        margin: 0 10px .06rem 10px;
        content: '';
        width: 14px;
        height: 2px;
        background-color: #C9D2D9;
      }
    }
  }
}
</style>
