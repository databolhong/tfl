<template>
<div v-show="show" @click="handleHide">
  <div class="model-insured" @click.stop="">
    <div class="title clearfix">
      <span class="title-text fl">{{type === 'edit' ? '编辑' : '新增'}}被保人信息</span>
      <span class="title-img fr" @click="handleHide"><img src="/static/images/closeIco@3x.png" alt=""></span>
    </div>
    <div class="model-content">
      <div>
        <div class="insertKey">姓名</div>
        <div class="insertValue">
          <input type="text">
        </div>
      </div>
      <div>
        <div class="insertKey">证件类型</div>
        <div class="insertValue">
          <select name="" v-model="dataobj.idType">
            <option value="">身份证</option>
          </select>
        </div>
      </div>
      <div>
        <div class="insertKey">证件号码</div>
        <div class="insertValue"><input type="number" v-model="dataobj.id" placeholder="请输入证件号"></div>
      </div>
      <div>
        <div class="insertKey">出生日期</div>
        <div class="insertValue">{{dataobj.birthday || '请选择出生日期'}}</div>
      </div>
      <div>
        <div class="insertKey">性别</div>
        <div class="insertValue">性别</div>
      </div>
      <div>
        <div class="insertKey">关系</div>
        <div class="insertValue">关系</div>
      </div>
      <div>
        <div class="insertKey">保额</div>
        <div class="insertValue"><input type="number" v-model="dataobj.insuredAmount" placeholder="请输入保额"></div>
      </div>
      <div>
        <div class="insertKey">交费期限</div>
        <div class="insertValue">
          <select v-model="dataobj.paymentMethod">
            <option value="">请选择交费期限</option>
            <option value="0">趸交（一次性交费）</option>
            <option value="2">2年</option>
            <option value="5">5年</option>
            <option value="10">10年</option>
            <option value="15">15年</option>
            <option value="20">20年</option>
          </select>
        </div>
      </div>
    </div>
    <div class="footer">
      <span @click="save">保存</span>
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
      type: 'add',
      dataobj: {
        name: '', // 姓名
        idType: '', // 证件类型
        id: '', // 证件号
        birthday: '', // 出生日期
        gender: '', // 性别
        relations: '', // 关系
        insuredAmount: '', // 保额
        paymentMethod: '',
        premium: '' // 保费
      }
    }
  },
  created () {
    // 监听新增修改被保人信息model
    this.$root.EVENTBUS.$on('MODELINSURED', this.modalShow)
  },
  mounted () {
    console.log('modelInsured')
  },
  methods: {
    /*
    * params {type: edit/add}
    * */
    modalShow (obj) {
      this.type = obj.type

      this.$store.commit('showModalMask')
      this.show = true
      if (obj.type === 'add') {
        this.addShow(obj)
      } else {
        this.editShow(obj)
      }
    },
    editShow (obj) {
      console.log(obj.type)
    },
    addShow (obj) {
      console.log(obj.type)
    },
    save () {
      console.log('save')
    },
    handleHide () {
      this.$store.commit('hideModalMask')
      this.show = false
      this.dataobj = {
        name: '', // 姓名
        idType: '', // 证件类型
        id: '', // 证件号
        birthday: '', // 出生日期
        gender: '', // 性别
        relations: '', // 关系
        insuredAmount: '', // 保额
        premium: '' // 保费
      }
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.model-insured {
  margin: auto;
  width: 6.14rem;
  font-size: .36rem;
  color: #708196;
  background-color: #ffffff;
  padding: .34rem;
  border-radius: .16rem;
  text-align: left;
  .model-content>div{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #E6E6E6;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .insertValue {
      width: 3.84rem;
    }
  }
  .title {
    color: #373E4B;
    font-size: .36rem;
    .title-img {
      padding-left: .23rem;
     img {
       display: inline-block;
       width: .23rem;
       height: .23rem;
     }
    }
  }
  .model-content {
    font-size: .32rem;
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
  select {
    display: inline-block;
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    border: none;
    outline: none;
  }
}
</style>
