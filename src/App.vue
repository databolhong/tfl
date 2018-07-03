<template>
  <div id="app">
    <router-view/>
    <modelInsured class="box-flex modal"></modelInsured>
  </div>
</template>

<script type="text/ecmascript-6">
import modelInsured from './components/modelInsured/modelInsured'
export default {
  components: {modelInsured},
  name: 'App'
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
}
#app, body, html {
  height: 100%;
  font-size: 0.22rem;
}
body, html {
  overflow: hidden;
}
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  overflow: scroll;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
