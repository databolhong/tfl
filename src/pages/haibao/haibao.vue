<template>
  <div class="haibao">
    <div class="whyhh">
      <h4>为什么要买全家海宝保险</h4>
      <ol>
        <li>人的一生中患大病的概率高达72.16%</li>
        <li>重疾确诊即可获得一笔救命钱还可自由支配</li>
        <li>弥补患病期间的收入损失以便安心养病</li>
      </ol>
    </div>
    <div class="jihua">
      <div class="clearfix">
        <div class="fl">保障计划</div>
        <div class="fr" @click="viewDetails" style="display: none">查看详情</div>
      </div>
      <div class="clearfix">
        <div class="fl">投保年龄</div>
        <div class="fr">0-70岁</div>
      </div>
      <div class="clearfix">
        <div class="fl">保障时间</div>
        <div class="fr">终身</div>
      </div>
      <div class="clearfix">
        <div class="fl">保障范围</div>
        <div class="fr">100种重疾／60种轻症</div>
      </div>
    </div>
    <div style="height: .2rem;margin-top:.34rem; background-color: #F5F6F6"></div>
    <div style="min-height: .4rem">
      <div class="fixedNav" :class="{topFixed: topFixed}">
        <nav class="box-flex nav-button">
          <div class="flex" :class="{active: navType === 'wytb'}" @click="clickNav(1, 'wytb', $event)">我要投保</div>
          <div class="flex" :class="{active: navType === 'cpts'}" @click="clickNav(3.4, 'cpts', $event)">产品特色</div>
          <div class="flex" :class="{active: navType === 'lpsm'}" @click="clickNav(5.8, 'lpsm', $event)">理赔说明</div>
        </nav>
        <div class="mark-line" :style="{transform: 'translateX(' + longX + 'rem)'}"></div>
      </div>
    </div>
    <div style="position: relative;">
      <transition :name="haibaoNav">
        <wytb class="haibaoTransform" v-show="navType === 'wytb'"></wytb>
      </transition>
      <transition :name="haibaoNav">
        <cpts class="haibaoTransform" v-show="navType === 'cpts'"></cpts>
      </transition>
      <transition :name="haibaoNav">
        <lpsm class="haibaoTransform" v-show="navType === 'lpsm'"></lpsm>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import wytb from './components/wytb'
import cpts from './components/cpts'
import lpsm from './components/lpsm'
export default {
  components: {wytb, cpts, lpsm},
  name: 'haibao',
  data () {
    return {
      longX: 1,
      navType: 'wytb',
      topFixed: false,
      haibaoNav: 'haibaoNavLeft'
    }
  },
  mounted () {
    window.document.getElementById('app').addEventListener('scroll', this.handleScroll)
  },
  methods: {
    viewDetails () {
      this.$toast('查看详情')
    },
    clickNav (num, type, $event) {
      this.longX = parseFloat(num)
      this.navType = type
    },
    handleScroll () {
      let scrollTop = window.document.getElementById('app').scrollTop
      let font = window.document.documentElement.style.fontSize.slice(0, -2)
      if (scrollTop > 9.6 * font) {
        this.topFixed = true
      } else {
        this.topFixed = false
      }
      if (scrollTop > 50) {
        // this.$store.commit('headerbgcolor', '#ffffff')
      } else {
        // this.$store.commit('headerbgcolor', 'transparent')
      }
    }
  },
  destroyed () {
    window.document.getElementById('app').removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  .haibao {
    border-top: 1px solid transparent;
    background-image: url("./img/bgimg@3x.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    .whyhh {
      border-top: 1px solid transparent;
      text-align: left;
      width: 6.68rem;
      min-height: 3.22rem;
      margin:3.8rem auto 0;
      padding-left: .3rem;
      border-radius: .16rem;
      box-shadow: 0 0 .16rem rgba(0, 0, 0, .1);
      h4 {
        margin-top: .34rem;
        color: #485464;
        font-weight: 600;
        line-height: .5rem;
        font-size: .36rem;
      }
      ol {
        color: #708196;
        list-style: disc;
        font-size: .28rem;
        li {
          line-height: .4rem;
          margin-top: .24rem;
          margin-left: .3rem;
        }
      }
    }
    .jihua {
      width: 6.8rem;
      margin: .6rem auto 0;
      &>div {
        &:nth-child(1) {
          padding-bottom: .24rem;
          border-bottom: 1px solid #E6E6E6;
          &>div {
            &:nth-child(1){
              color: #373E4B;
              font-size: .32rem;
              line-height: .44rem;
            }
            &:nth-child(2) {
              color: #16D59A;
              font-size: .28rem;
            }
          }
        }
        &:nth-child(2), &:nth-child(3), &:nth-child(4) {
          font-size: .28rem;
          line-height: .4rem;
          margin-top: .26rem;
          &>div {
            &:nth-child(1){
              color: #708196;
            }
            &:nth-child(2) {
              color: #485464;
            }
          }
        }
        &:nth-child(2) {
          margin-top: .34rem;
        }
      }
    }
    .fixedNav {
      padding-top: .34rem;
    }
    .nav-button {
      color: #8E9FB4;
      font-size: .32rem;
      line-height: .44rem;
      .active {
        color: #373E4B;
      }
    }
    .mark-line {
      width: .4rem;
      height: .12rem;
      border-radius: .06rem;
      background: linear-gradient(left, #26EFA5, #26D0B1);
      background: -moz-linear-gradient(left, #04df8e, #14caa9);
      background: -o-linear-gradient(left,#04df8e, #14caa9);
      background: -webkit-gradient(linear, 0% 0%, 100% 100%, from(#04df8e), to(#14caa9));
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
    .haibaoTransform {
      position: absolute;
      width: 7.2rem;
      padding-bottom: 1.04rem;
      margin: auto;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
      transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
      transition: transform .4s cubic-bezier(.55,0,.1,1);
      transition: transform .4s cubic-bezier(.55,0,.1,1),-webkit-transform .4s cubic-bezier(.55,0,.1,1);
      will-change: transform;
    }
    .haibaoNavLeft-enter {
      transform: translateX(7.2rem);
    }
    .haibaoNavLeft-leave-to{
      transform: translateX(-7.2rem);
    }
    .haibaoNavRight-enter {
      transform: translateX(-7.2rem);
    }
    .haibaoNavRight-leave-to{
      transform: translateX(7.2rem);
    }
  }
</style>
