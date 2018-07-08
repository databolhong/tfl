<template>
<div v-show="show" class="box-flex" @click="handleHide">
  <div class="model-insured" @click.stop="">
    <div class="title clearfix">
      <span class="title-text fl">{{type === 'edit' ? '编辑' : '新增'}}被保人信息</span>
      <span class="title-img fr" @click="handleHide"><img src="/static/images/closeIco@3x.png" alt=""></span>
    </div>
    <div class="model-content">
      <div>
        <div class="insertKey">姓名</div>
        <div class="insertValue">
          <input type="text" v-model="dataobj.name" placeholder="请输入被保人姓名">
        </div>
      </div>
      <div>
        <div class="insertKey">证件类型</div>
        <div class="insertValue">
          <select v-model="dataobj.idType">
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
      <span @click="handleSave">保存</span>
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
      saveLoading: false,
      dataobj: {
        name: '', // 姓名
        idType: '', // 证件类型
        id: '', // 证件号
        birthday: '', // 出生日期
        gender: '', // 性别
        relations: '', // 关系
        insuredAmount: '', // 保额
        paymentMethod: '', // 交费方式期限
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
      console.log(obj)
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
    handleSave () {
      if (this.saveLoading) {
        return
      }
      if (!this.test()) {
        return
      }
      console.log('this.ajaxSave()')
      // this.ajaxSave()
    },
    ajaxSave () {
      let obj = this.dataobj
      let data = {
        name: obj.name.trim(),
        idType: obj.idType,
        id: obj.id,
        birthday: obj.birthday,
        gender: obj.gender,
        relations: obj.relations,
        insuredAmount: obj.insuredAmount,
        paymentMethod: obj.paymentMethod
        // paymentHandline: ''
      }
      this.saveLoading = true
      this.$axios({
        method: 'post',
        url: '',
        data: data
      }).then((response) => {
        console.log(response)
        this.saveLoading = false
        if (response.data.success) {
          this.handleHide()
        }
      }).catch((error) => {
        this.saveLoading = false
        console.log(error)
      })
    },
    test () {
      if (!this.dataobj.name.trim()) {
        this.$toast('姓名不能为空')
        return false
      }
      if (!this.testID()) {
        return false
      }
      if (!this.dataobj.gender) {
        this.$toast('请选择性别')
        return false
      }
      if (!this.dataobj.relations) {
        this.$toast('请选择被保人与本人关系')
        return false
      }
      if (!this.dataobj.paymentMethod) {
        this.$toast('请选择交费期限')
        return false
      }
      return true
    },
    testID () {
      let id = this.dataobj.id
      let numreg = /^[A-Za-z0-9]+$/ // 数字字母组合
      if (id.length <= 0) {
        this.$toast('证件号不能为空')
        return false
      }
      if (!numreg.test(id)) {
        this.$toast('证件号格式错误')
        return false
      }
      /*
      * 根据证件类型具体错误判断提示
      */
      // switch (this.dataobj.idType) {
      //   case '':
      //
      //     return
      //   default:
      //     return
      // }
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
        paymentMethod: '', // 交费方式期限
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
    margin-top: .6rem;
    span {
      text-align: center;
      display: inline-block;
      font-size: .36rem;
      color: #ffffff;
      width: 5.34rem;
      line-height: .88rem;
      border-radius: .44rem;
      background: linear-gradient(to right, #04DF8E, #14CAA9);
      /*background: -moz-linear-gradient(left, #04df8e, #14caa9);*/
      /*background: -o-linear-gradient(left,#04df8e, #14caa9);*/
      /*background: -webkit-gradient(linear, 0% 0%, 100% 100%, from(#04df8e), to(#14caa9));*/
    }
  }
  select {
    display: inline-block;
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    border: none;
    outline: none;
    background-color: #ffffff;
  }
}
</style>
