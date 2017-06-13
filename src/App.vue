// 组件
<template>
  <div id="app">
    <router-view
    class="view"
    kepp-alive
    transtion
    transtion-mode="out-in">
    </router-view>
    <Nav></Nav>
  </div>
</template>

// JS
<script>
import Nav from '@/components/nav'
export default {
  components: {
    Nav
  }
}
</script>

// 样式
<style lang="scss">
  @import  "./style/style";
</style>
