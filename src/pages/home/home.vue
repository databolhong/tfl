<template>
  <div class="home">
    <!--保险-->
    <div class="dataCart" @click="handleClick(index)" v-for="(item, index) in dataCart" :key="index">
      <div class="cart-title" v-text="item.title"></div>
      <div class="clearfix">
        <div class="fl content-before">
          <img style="width: 65%; padding-top: .15rem" :src=" '/static/images/' + item.img " alt="">
        </div>
        <div class="fl content">
          <div v-text="item.content"></div>
          <div v-text="item.direction"></div>
        </div>
        <div class="fr content-after" >
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="bottom-title" style="width: 100%">
      <span>泰康，用心为您</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'home',
  data () {
    return {
      dataCart: [
        {
          title: '保险服务',
          content: '全家海保，重疾保障',
          direction: '保障100种重疾+60种轻症，市场领先',
          img: 'icon3.png'
        },
        {
          title: '医疗服务',
          content: '在线问诊，优质医疗',
          direction: '50万医生，24小时全天候为您护航',
          img: 'icon1.png'
        },
        {
          title: '保障服务',
          content: '订单查询',
          direction: '实时追踪投保信息',
          img: 'icon2.png'
        }
      ]
    }
  },
  methods: {
    handleClick (index) {
      if (index === 2) {
        this.$router.push({name: 'myOrders'})
        return
      } else if (index === 1) {
        this.$router.push({name: 'ylfw'})
        return
      }
      this.$router.push({path: '/haibao'})
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.home {
  background: url("./img/home.png") no-repeat;
  background-size: 100% auto;
  padding-top: 3.44rem;
  margin: auto;
  background-color: #F5F6F6;
  height: 100%;
  .dataCart {
    color: #ffffff;
    text-align: left;
    width: 6.7rem;
    padding: 0 .3rem .3rem;
    border-radius: 5px;
    margin: .4rem auto auto;
    background: linear-gradient(left, #04DF8E, #14CAA9);
    background: -moz-linear-gradient(left, #04df8e, #14caa9);
    background: -o-linear-gradient(left,#04df8e, #14caa9);
    background: -webkit-gradient(linear, 0% 0%, 100% 100%, from(#04df8e), to(#14caa9));
  }
  .cart-title {
    padding: .14rem 0;
    font-size: .24rem;
    line-height: .34rem;
    border-bottom: 1px solid #ffffff;
  }
  .content-before {
    width: .86rem;
    margin-top: .32rem;
    line-height: .9rem;
  }
  .content {
    &>div {
      &:first-child {
        height: .5rem;
        font-size: .36rem;
        margin-top: .32rem;
      }
      &:nth-child(2) {
        height: .34rem;
        font-size: .24rem;
        margin-top: .06rem;
      }
    }
  }
  .content-after {
    margin-top: .32rem;
    line-height: .9rem;
  }
  .bottom-title {
    padding: .68rem 0 0;
    span {
      color: #BEC9D1;
      font-size: .24rem;
      &:before, &:after {
        display: inline-block;
        margin: 0 10px .06rem 10px;
        content: '';
        width: 16px;
        height: 2px;
        background-color: #BEC9D1;
      }
    }
  }
}
</style>
