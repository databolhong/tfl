<template>
<div class="wytb-content">
  <div style="padding: .48rem .3rem 0">
    <h4>选择参保方案</h4>
    <div class="box-flex selectTbTypeBtn-wrap">
      <div class="selectTbTypeBtn" :class="{active: item.type === selectType}" @click="selectTbType(item.type, item.content)" :key="index" v-for="(item, index) in tbType">{{item.content}}</div>
    </div>
    <div style="padding-bottom: .1rem" class="tbrcart-wrap box-flex">
      <div class="tbrcart" v-for="(item, index) in tbcl" :key="index"  @click="addbbr(index ? 'edit' : 'self', index)">
        <div><span>{{item.relations}}</span>{{item.name}}</div>
        <div>保额：<span>{{item.insuredAmount ? item.insuredAmount / 10000 + '万' : '未选择'}}</span></div>
        <div>交费期限：<span>{{item.paymentTime || '未选择'}}</span></div>
        <div class="money">保费：<span>{{item.premium ? item.premium + '元' : '0元'}}</span></div>
        <div class="cha" v-if="item.relations !== '本人'" @click.stop="removeTbCart(index)"><i class="iconfont icon-chahao"></i></div>
      </div>
      <div class="kuang2" v-show="(zhonge / 10000) >=30">
        <div><span>本人</span>{{tbcl[0].name}}</div>
        <div>保额：<span>{{tbcl[0].insuredAmount ? tbcl[0].insuredAmount / 10000 + '万' : '未选择'}}</span></div>
        <div>交费期限：<span>{{tbcl[0].paymentTime ? (tbcl[0].paymentTime === '一次性交费' ? '趸交': tbcl[0].paymentTime) : '未选择'}}</span></div>
        <div class="money">保费：<span>{{tbcl[0].premium || '0'}}元</span></div>
      </div>
    </div>
    <div class="addbbr" @click="addbbr('add', 0)"><span class="add">+</span><span>增加被保人</span></div>
    <div style="margin-top: .3rem ;line-height: .92rem; border-bottom: 1px solid #E6E6E6; font-size: .32rem; color: #373E4B">保费结算</div>
    <div class="bfjs"> <!--保费结算-->
      <div class="clearfix bbr">
        <div class="fl">被保人</div>
        <div class="fr">
          <span :class="{active: typs['本人']}">本人</span>
          <span :class="{active: typs['配偶']}">配偶</span>
          <span :class="{active: typs['子女']}">子女</span>
          <span :class="{active: typs['父母']}">父母</span>
        </div>
      </div>
      <div class="clearfix zbe">
        <div class="fl">总保额</div>
        <div class="fr">
          <span>{{(zhonge / 10000).toFixed(1)}}万{{(zhonge / 10000) >= 30 ? '(含工会补贴8000元)' : ''}}</span>
        </div>
      </div>
      <div class="clearfix zbf">
        <div class="fl">总保费</div>
        <div class="fr" style="text-align: right">
          <p v-show="showDun">5070元（个人趸交）</p>
          <p v-show="showNian">＋8650元/年（个人年交）</p>
          <p v-show="(zhonge / 10000) >=30">＋3000元（工会趸交）</p>
        </div>
      </div>
    </div>
  </div>
  <div style="height: .2rem;margin-top:.34rem; background-color: #F5F6F6"></div>
  <div class="agreement">
    <i @click="handleAccept" v-show="accept" class="iconfont icon-xuanzhong accept-agreement"></i>
    <i @click="handleAccept" v-show="!accept" class="iconfont icon-checkbox accept-agreement"></i>
    我已确认
    <span @click="clause">《投保须知》</span>
    <span @click="clause">《服务协议》</span>
    <span @click="clause">《保险条款》</span>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'wytb',
  data () {
    return {
      dataTypes: {
        type1: [
          {
            relations: '本人',
            name: '刘江梅',
            insuredAmount: '300000', // 保额
            paymentTime: '20年',
            premium: '3067' // 保费
          },
          {
            relations: '配偶',
            name: '',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '3067'
          },
          {
            relations: '子女',
            name: '',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '4067'
          }
        ],
        type2: [
          {
            relations: '本人',
            name: '刘江梅',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '3067'
          },
          {
            relations: '父母',
            name: '',
            insuredAmount: '1000000',
            paymentTime: '10年',
            premium: '4067'
          },
          {
            relations: '父母',
            name: '',
            insuredAmount: '100000',
            paymentTime: '10年',
            premium: '4067'
          }
        ],
        type3: [
          {
            relations: '本人',
            name: '刘江梅',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '3067'
          },
          {
            relations: '配偶/子女',
            name: '',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '3067'
          }
        ],
        type4: [
          {
            relations: '本人',
            name: '刘江梅',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '3067'
          }
        ],
        type5: [
          {
            relations: '本人',
            name: '刘江梅',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '3067'
          },
          {
            relations: '配偶',
            name: '',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '3067'
          },
          {
            relations: '子女',
            name: '',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '4067'
          },
          {
            relations: '子女',
            name: '',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '4067'
          }
        ],
        type6: [
          {
            relations: '本人',
            name: '刘江梅',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '3067'
          },
          {
            relations: '父母',
            name: '',
            insuredAmount: '300000',
            paymentTime: '10年',
            premium: '4567'
          }
        ],
        type7: [
          {
            relations: '本人',
            name: '刘江梅',
            insuredAmount: '300000',
            paymentTime: '20年',
            premium: '3067'
          }
        ]
      },
      tbType: [
        {type: 'type1', content: '三口之家'},
        {type: 'type2', content: '关爱父母'},
        {type: 'type3', content: '两口之家'},
        {type: 'type4', content: '单身贵族'},
        {type: 'type5', content: '四口之家'},
        {type: 'type6', content: '本人父母'},
        {type: 'type7', content: '自定义'}
      ]
    }
  },
  created () {
    this.selectTbType('type1', '三口之家')
  },
  computed: {
    // insuredImmediately () {
    //   console.log('insuredImmediately')
    //   return this.$store.state.insuredImmediately
    // },
    zhonge () {
      let num = 0
      this.tbcl.forEach((item, index) => {
        if (item.insuredAmount) {
          num = num + parseFloat(item.insuredAmount)
        }
      })
      return num
    },
    tbcl () {
      return JSON.parse(JSON.stringify(this.$store.state.dataArry))
    },
    showDun () {
      for (let i = 0; i < this.tbcl.length; i++) {
        let item = this.tbcl[i]
        if (item.paymentTime === '一次性交费') {
          return true
        }
      }
      return false
    },
    showNian () {
      for (let i = 0; i < this.tbcl.length; i++) {
        let item = this.tbcl[i]
        if (item.paymentTime !== '一次性交费') {
          return true
        }
      }
      return false
    },
    selectType () {
      return this.$store.state.selectTBType
    },
    typs () {
      let obj = {}
      this.tbcl.forEach((item, index) => {
        obj[item.relations] = 1
      })
      return obj
    },
    accept () {
      return this.$store.state.acceptHaibao
    }
  },
  methods: {
    selectTbType (type, content) {
      this.$store.commit('selectTBType', type)
      let tbcl = JSON.parse(JSON.stringify(this.dataTypes[type]))
      window.TDAPP.onEvent('选择参保方案', 'haibao全家海宝页面', {'type': type + '___' + content})
      this.$store.commit('putIndataArry', tbcl)
    },
    removeTbCart (index) {
      this.tbcl.splice(index, 1)
      this.$store.commit('selectTBType', 'type7')
      window.TDAPP.onEvent('删除被保人', 'haibao全家海宝页面')
      this.$store.commit('removeIndataArry', index)
    },
    addbbr (type, index) {
      this.$store.commit('addPerson', type + '&' + index)
    },
    handleAccept () {
      this.$store.commit('acceptHaibao')
    },
    clause () {
      window.TDAPP.onEvent('查看协议详情', 'haibao全家海宝页面')
      this.$router.push({name: 'clause'})
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.wytb-content {
  text-align: left;
  h4 {
    font-size: .32rem;
    color: #373E4B;
    font-weight: 600;
    line-height: .44rem;
  }
  .selectTbTypeBtn-wrap {
    flex-wrap: wrap;
  }
  .selectTbTypeBtn {
    line-height: .5rem;
    border-radius: .25rem;
    font-size: .216rem;
    padding: 0 .3rem;
    margin-top: .32rem;
    margin-left: .17rem;
    flex: 0 1 auto;
    box-shadow: 0 0 .16rem rgba(0, 0, 0, .1);
    &:first-child {
      margin-left: 0;
    }
    &:nth-child(5) {
      margin-left: 0;
    }
    &.active {
      color: #ffffff;
      background: linear-gradient(left, #04DF8E, #14CAA9);
      background: -moz-linear-gradient(left, #04df8e, #14caa9);
      background: -o-linear-gradient(left,#04df8e, #14caa9);
      background: -webkit-gradient(linear, 0% 0%, 100% 100%, from(#04df8e), to(#14caa9));
    }
  }
  .tbrcart-wrap {
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .tbrcart {
    position: relative;
    width: 3.2rem;
    flex: 0 1 auto;
    padding: .24rem .32rem;
    margin-top: .38rem;
    border-radius: .16rem;
    box-shadow: 0 0 .16rem rgba(0, 0, 0, .1);
    color: #708196;
    &>div{
      font-size: .24rem;
      line-height: .34rem;
      margin-top: .1rem;
      &:nth-child(1) {
        font-size: .32rem;
        line-height: .44rem;
        span {
          color: #373E4B;
          padding-right: .2rem;
        }
      }
      &:nth-child(2) {
       margin-top: .16rem;
      }
    }
    .money {
      color: #FF820A;
    }
    .cha {
      position: absolute;
      top: 0;
      right: 0;
      width: .5rem;
      line-height: .7rem;
      font-size: .43rem;
    }
  }
  .kuang2 {
    flex: 0 1 auto;
    background-image: url(../img/butie1@3x.png);
    background-color: transparent;
    background-position: left top;
    background-repeat: no-repeat;
    box-shadow: 0 0 0.16rem #e5e5e5;
    border-radius: 0.16rem;
    padding: .24rem .32rem;
    margin-top: .38rem;
    overflow: hidden;
    width: 3.2rem;
    box-sizing: border-box;
    background-size: 100%;
    color: #708196;
    &>div{
      font-size: .24rem;
      line-height: .34rem;
      margin-top: .1rem;
      &:nth-child(1) {
        font-size: .32rem;
        line-height: .44rem;
        span {
          color: #373E4B;
          padding-right: .2rem;
        }
      }
      &:nth-child(2) {
        margin-top: .16rem;
      }
    }
    .money {
      color: #FF820A;
    }
  }
  .addbbr {
    font-size: 0;
    margin-top: .3rem;
    .add {
      display: inline-block;
      text-align: center;
      font-size: .36rem;
      line-height: .55rem;
      padding: .01rem .02rem 0 0;
      margin-right: .15rem;
      width: .55rem;
      color: #ffffff;
      border-radius: 50%;
      background:linear-gradient(left, #04DF8E, #14CAA9) ;
      background: -moz-linear-gradient(left, #04df8e, #14caa9);
      background: -o-linear-gradient(left,#04df8e, #14caa9);
      background: -webkit-gradient(linear, 0% 0%, 100% 100%, from(#04df8e), to(#14caa9));
    }
    span {
      font-size: .32rem;
      color: #485464;
      line-height: .44rem;
    }
  }
  .bfjs {
    padding-top: .34rem;
    &>div {
      line-height: .66rem;
      &>div {
        &:first-child {
          font-size: .28rem;
          color: #708196;
          /*line-height: .4rem;*/
        }
      }
    }
    .bbr {
      span {
        display: inline-block;
        border: 1px solid #8E9FB4;
        text-align: center;
        color: #8E9FB4;
        padding: 0 0.12rem;
        margin-left: 0.2rem;
        font-weight: 200;
        font-size: 0.24rem;
        line-height: .38rem;
        height: .38rem;
        &.active {
          border: 1px solid #16D59A;
          color: #16D59A;
          background-image: url(../img/imgSelected@3x.png);
          background-position: right bottom;
          background-repeat: no-repeat;
          background-size: 24%;
        }
      }
    }
    .zbe {
    }
    .zbf {
    }
  }
  .agreement {
    line-height: .74rem;
    text-align: left;
    padding: .48rem .3rem 0;
    .accept-agreement {
      padding-right: .2rem;
      height: .7rem;
      display: inline-block;
      line-height: .74rem;
      color: #16D59A;
      &:before{
        font-size: .32rem;
      }
    }
    span {
      color: #16D59A;
    }
  }
}
</style>
