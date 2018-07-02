<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'App'
}
</script>

<style lang="less" rel="stylesheet/less">
@import "assets/less/reset.less";
#app {
  width: 7.5rem;
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
</style>
<style scoped lang="less" rel="stylesheet/less">

</style>
