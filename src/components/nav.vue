<template>
  <ul class="navs">
      <li @click="goPage(index)" class="nav" v-for="(nav, index) in navs" v-text="nav"></li>
  </ul>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navs: ['时光', '记录', '发现', '个人']
    }
  },
  methods: {
    goPage: function (index) {
      if (index === 0) {
        this.$router.push({
          path: '/time'
        })
      } else if (index === 1) {
        this.$router.push({
          path: '/record'
        })
      } else if (index === 2) {
        this.$router.push({
          path: '/found'
        })
      } else if (index === 3) {
        this.$router.push({
          path: '/user'
        })
      } else {
        alert('进行错误跳转: ' + index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/base/_color.scss';

.navs{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  .nav{
    width: 23%;
    height: 80px;
    background: $base-color;
    font-size: 36px;
    text-align: center;
    line-height: 80px;
    border-radius:3%;
  }
}
</style>
