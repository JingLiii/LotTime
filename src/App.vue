// 组件
<template>
  <div id="app">
    <router-view
    class="view"
    kepp-alive
    transtion
    transtion-mode="out-in">
    </router-view>
    <myNav></myNav>
  </div>
</template>

// JS
<script>
import myNav from '@/components/myNav'
export default {
  components: {
    myNav
  },
  // beforeCreate () {
  //   // alert('dddd')
  //   document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
  // },
  created: function () {
    this.testFuc(this.$jQuery('#app'))
  },
  methods: {
    testFuc: function (params) {
      // console.log(params)
    }
    // onDeviceReady: function () {
    //   alert('onDeviceReady')
    // }
  }
}
</script>

// 样式
<style lang="scss">
  @import  "./style/style";
  body{
    background-color: #f2f2f2;
  }
</style>
