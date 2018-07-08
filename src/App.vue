<template>
  <!--<div id="app" :class="{overflowHidden: modalMask}">-->
  <div id="app">
    <router-view/>
    <div class="v-modal" v-show="modalMask" style="z-index: 40;"></div>
    <modelInsured class="modal"></modelInsured>
  </div>
</template>

<script type="text/ecmascript-6">
import modelInsured from './components/modelInsured/modelInsured'
export default {
  components: {modelInsured},
  name: 'App',
  created () {
    console.log('启动')
  },
  computed: {
    modalMask () {
      return this.$store.state.modalMask
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import "assets/less/reset.less";
#app {
  width: 7.5rem;
  margin: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  /*&.overflowHidden {*/
    /*overflow: hidden;*/
  /*}*/
}
#app, body, html {
  height: 100%;
  font-size: 0.22rem;
}
body, html {
  overflow: hidden;
}
.v-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  background: #000;
}
.modal {
  /*position: fixed;*/
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 50;
  -webkit-overflow-scrolling: touch;
  justify-content: center;
  align-items: center;
}
</style>
