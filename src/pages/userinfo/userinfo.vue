<template>
  <div class="person-detail">
    <div class="topDiv2">
      <div class="bgimgDiv3">
        <div class="inforMore">
          <span class="bigtitle">{{personObj.name || '姓名'}}<span class="guanxi">{{personObj.relations || ''}}</span></span>
          <span class="smalltitle">保险作为防风险的产品，</span>
          <span class="smalltitle">需要完善您的信息才能购买。</span>
        </div>
      </div>
    </div>
    <div style="min-height: .9rem">
      <div class="fixedNav" :class="{topFixed: topFixed}">
        <nav class="box-flex nav-button">
          <div class="flex" :class="{active: navType === '1'}" @click="clickNav('1', $event)">
            <p>个人信息</p>
            <span></span>
          </div>
          <div class="flex" :class="{active: navType === '2'}" @click="clickNav('2', $event)">
            <p>保险信息</p>
            <span></span>
          </div>
          <div class="flex" :class="{active: navType === '3'}" @click="clickNav('3', $event)">
            <p>受益人</p>
            <span></span>
          </div>
          <div class="flex" :class="{active: navType === '4'}" @click="clickNav('4', $event)">
            <p>健康问卷</p>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
    <div style="position: relative;">
      <transition :name="personNav">
        <!--个人信息-->
        <!--<grxx class="personTransform" v-show="navType === '1'"></grxx>-->
      </transition>
      <transition :name="personNav">
        <!--保险信息-->
        <!--<bxxx class="personTransform" v-show="navType === '2'"></bxxx>-->
      </transition>
      <transition :name="personNav">
        <!--受益人-->
        <!--<syr class="personTransform" v-show="navType === '3'"></syr>-->
      </transition>
      <transition :name="personNav">
        <!--健康问卷-->
        <!--<jkwq class="personTransform" v-show="navType === '4'"></jkwq>-->
      </transition>
    </div>
    <div class="btn" @click="btnNext">保存信息</div>
  </div>
</template>

<script type="text/ecmascript-6">
// import grxx from './components/grxx'
// import bxxx from './components/bxxx'
// import syr from './components/syr'
// import jkwq from './components/jkwq'
export default {
  // components: {grxx, bxxx, syr, jkwq},
  data () {
    return {
      topFixed: false,
      navType: '1',
      personNav: 'toLeft',
      personObj: {}
    }
  },
  mounted () {
    window.document.getElementById('app').addEventListener('scroll', this.handleScroll)
  },
  computed: {
    // personObj () {
    //   return this.$store.state.addPersonDetailArry[this.$store.state.addPersonDetailIndex]
    // }
  },
  methods: {
    clickNav (type) {
      this.navType = type
    },
    btnNext () {
      if (this.navType === '4') {
        // this.$router.push({name: 'perfect'})
      }
      this.navType = parseFloat(this.navType) + 1 + ''
    },
    handleScroll () {
      let scrollTop = window.document.getElementById('app').scrollTop
      let font = window.document.documentElement.style.fontSize.slice(0, -2)
      if (scrollTop > 2 * font) {
        this.topFixed = true
      } else {
        this.topFixed = false
      }
      // if (scrollTop > 105) {
      //   this.$store.commit('headerbgcolor', '#ffffff')
      //   this.$store.commit('fontColor', '')
      // } else {
      //   this.$store.commit('headerbgcolor', 'transparent')
      //   this.$store.commit('fontColor', '#ffffff')
      // }
    }
  },
  destroyed () {
    window.document.getElementById('app').removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .bottomImg {
    width: 100%;
    margin: 0.26rem auto 0.26rem auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 2.56rem;
    }
  }
</style>
<style scoped lang="less" rel="stylesheet/less">
  .person-detail {
    .btn {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(left, #FF8008, #F79F2A);
      background: -moz-linear-gradient(left, #FF8008, #F79F2A);
      background: -o-linear-gradient(left,#FF8008, #F79F2A);
      background: -webkit-gradient(linear, 0% 0%, 100% 100%, from(#FF8008), to(#F79F2A));
      font-size: .36rem;
      color: #ffffff;
      text-align: center;
      line-height: 1.04rem;
      height: 1.04rem;
    }
    text-align: left;
    height: 100%;
    background-color: #F7F7F7;
    .bgimgDiv3 {
      background-image: url(./img/Bitmap@3x.png);
      background-repeat: no-repeat;
      background-position: left top;
      background-size: 100%;
      padding-bottom: 0.4rem;
      overflow: hidden;
      .inforMore {
        display: flex;
        flex-direction: column;
        padding: 1rem 0 0 0.6rem;
        span {
          flex: none;
        }
      }
      .bigtitle {
        color: #fff;
        font-size: 0.64rem;
      }
      .smalltitle {
        color: #fff;
        font-size: 0.28rem;
        font-weight: 200;
      }
    }
    .guanxi {
      color: #fff;
      font-size: 0.4rem;
      font-weight: 200;
      padding-left: 0.2rem;
    }
    .nav-button {
      color: #8E9FB4;
      font-size: .26rem;
      line-height: .44rem;
      text-align: center;
      padding-top: .3rem;
      .active {
        color: #16D59A;
        transform: scale(1.1);
        span {
          display: block;
          width: 30%;
          border-radius: 0.05rem;
          height: 0.12rem;
          background: linear-gradient(to right,#26EFA5,#26D0B1);
          background: -moz-linear-gradient(left, #04df8e, #14caa9);
          background: -o-linear-gradient(left,#04df8e, #14caa9);
          background: -webkit-gradient(linear, 0% 0%, 100% 100%, from(#04df8e), to(#14caa9));
          margin: 0.1rem auto 0rem auto;
        }
      }
    }
    .fixedNav {
      position: relative;
      z-index: 10;
      background-color: #ffffff;
    }
    .topFixed {
      position: fixed;
      top: .79rem;
      left: 0;
      right: 0;
      background-color: #ffffff;
      z-index: 99;
      box-shadow: 0 0 .1rem rgba(0, 0, 0, .1);
    }
    .personTransform {
      position: absolute;
      width: 7.2rem;
      padding-bottom: 1.04rem;
      background-color: #F7F7F7;
      margin: auto;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
      transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
      transition: transform .4s cubic-bezier(.55,0,.1,1);
      transition: transform .4s cubic-bezier(.55,0,.1,1),-webkit-transform .4s cubic-bezier(.55,0,.1,1);
      will-change: transform;
    }
    .toLeft-enter {
      transform: translateX(7.2rem);
    }
    .toLeft-leave-to{
      transform: translateX(-7.2rem);
    }
    .toRight-enter {
      transform: translateX(-7.2rem);
    }
    .toRight-leave-to{
      transform: translateX(7.2rem);
    }
  }
</style>
