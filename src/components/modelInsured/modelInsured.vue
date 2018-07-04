<template>
<div v-show="show" @click="handleHide">
  <div class="model-insured" @click.stop="">
    <div>
      <span>{{type === 'edit' ? '编辑' : '新增'}}被保人信息</span>
      <span></span>
    </div>
    <div class="model-content">
      <div>姓名</div>
      <div>证件类型</div>
      <div>证件号码</div>
      <div>出生日期</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="footer">
      <span>保存</span>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'model-insured',
  data () {
    return {
      show: false,
      type: 'add'
    }
  },
  created () {
    // 监听新增修改被保人信息model
    this.$root.EVENTBUS.$on('MODELINSURED', this.editShow)
  },
  mounted () {
    console.log('modelInsured')
  },
  methods: {
    /*
    * params {type: edit/add}
    * */
    editShow (obj) {
      this.type = obj.type
      this.$store.commit('showModalMask')
      this.show = true
    },
    handleHide () {
      this.$store.commit('hideModalMask')
      this.show = false
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.model-insured {
  width: 6.14rem;
  font-size: .36rem;
  color: #ffffff;
  background-color: #ffffff;
  padding: .34rem;
  border-radius: .16rem;
  text-align: left;
  .model-content>div{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #E6E6E6;
  }
  .footer {
    span {
      text-align: center;
      display: inline-block;
      font-size: .36rem;
      color: #ffffff;
      width: 5.34rem;
      line-height: .88rem;
      border-radius: .44rem;
      background: linear-gradient(left, #04DF8E, #14CAA9);
      background: -moz-linear-gradient(left, #04df8e, #14caa9);
      background: -o-linear-gradient(left,#04df8e, #14caa9);
      background: -webkit-gradient(linear, 0% 0%, 100% 100%, from(#04df8e), to(#14caa9));
    }
  }
}
</style>
