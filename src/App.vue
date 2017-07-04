// 组件
<template>
  <div id="app">
    <Shelter v-show="shelterController"></Shelter>
    <MyHeader :title="title"></MyHeader>
    <router-view
    class="view"
    kepp-alive
    transtion
    transtion-mode="out-in">
    </router-view>
    <myNav v-on:goPage="navChange"></myNav>
  </div>
</template>

// JS
<script>
import myNav from '@/components/myNav'
import MyHeader from '@/components/MyHeader'
import Shelter from '@/components/Shelter'

export default {
  components: {
    myNav,
    MyHeader,
    Shelter
  },
  data () {
    return {
      title: '',
      // 控制是否出现遮挡层
      // todo: 跑在安卓时, 需要改为true
      shelterController: false
    }
  },
  created: function () {
    var _this = this
    // 视图构建完成, 设备链接完成后, 去掉遮挡层
    document.addEventListener('deviceready', function () {
      setTimeout(function () {
        _this.shelterController = false
      }, 1000)
    }, false)
    // 页面加载完成后, 直接加载时光页面
    this.navChange(0)
  },
  methods: {
    navChange: function (index) {
      if (index === 0) {
        this.title = '往日时光'
      } else if (index === 1) {
        this.title = '记录生活'
      } else if (index === 2) {
        this.title = '发现'
      } else if (index === 3) {
        this.title = '个人中心'
      }
    }
  }
}
</script>

// 样式
<style lang="scss">
  @import  "./style/style";
  body{
    height: 3000px;
    background-color: #f2f2f2;
    // background-image: url('./img/background.jpg');
  }
</style>
