<template>
<div id="notFound" class="fill-height">
  <p>404 notFound</p>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NotFoundComponent',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  #notFound {
    display: flex;
    align-items:center;
    justify-content: center;
    height: 100%;
    font-size: .6rem;
    color: #666666;
    font-weight: 600;
  }
</style>
