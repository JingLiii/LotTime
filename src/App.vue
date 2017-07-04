// 组件
<template>
  <div id="app">
    <MyHeader :title="title"></MyHeader>
    <router-view
    class="view"
    kepp-alive
    transtion
    transtion-mode="out-in">
    </router-view>
    <myNav v-on:goPage="navChange"></myNav>
    <!--<img src="./img/background.jpg" alt="">-->
  </div>
</template>

// JS
<script>
import myNav from '@/components/myNav'
import MyHeader from '@/components/MyHeader'

export default {
  components: {
    myNav,
    MyHeader
  },
  data () {
    return {
      title: ''
    }
  },
  created: function () {
    // 使用jQuery的方法
    // this.testFuc(this.$jQuery('#app'))
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
    background-color: #f2f2f2;
    // background-image: url('./img/background.jpg');
  }
</style>
