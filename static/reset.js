(function (n) {
  let e = n.document // 获取document
  let t = e.documentElement // 获取根节点html
  let dpr = n.devicePixelRatio || 1 // 获取屏幕data-dpr值
  let i = 750 // 初始值720px
  let d = i / 100 // 假设100px为1rem，那么720px为7.2rem
  let o = 'orientationchange' in n ? 'orientationchange' : 'resize' // 判断是否有改变横屏事件，没有的话用resize事件
  function recalc () {
    let n = t.clientWidth || 320 // 获取手机屏幕宽度
    if (n > 720) {
      n = 720 // 手机屏幕宽度大于720px默认设置为720px，即最大宽度为720px
    }
    t.setAttribute('data-dpr', dpr)
    t.style.fontSize = n / d + 'px' // 设置根元素的字体大小为手机屏幕宽度/7.2,为上面自己定义的，当然你可以定义成别的，8.2，9.4都行
  }
  if (e.addEventListener) { // 判断是否有addeventlistener方法，如果有，就绑定上面判断的o事件
    n.addEventListener(o, recalc, false)
    e.addEventListener('resize', recalc, false)
    e.addEventListener('DOMContentLoaded', recalc, false) // 绑定DOMContentLoaded事件
  }
})(window)
