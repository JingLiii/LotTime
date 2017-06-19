<template>
  <ul class="navs">
      <li @click="goPage(index)" class="nav" v-for="(nav, index) in navs" >
        <icon class="icon" v-if="nav.awesomeIcon" v-bind:name="nav.awesomeIcon"></icon>
        <i v-bind:class="nav.icon">{{nav.text}}</i>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navs: [
        {
          text: '时光',
          icon: 'glyphicon glyphicon-apple'
        },
        {
          text: '记录',
          icon: 'glyphicon glyphicon-pencil'
        },
        {
          text: '发现',
          icon: 'glyphicon glyphicon-globe'
        },
        {
          text: '个人',
          awesomeIcon: 'user'
          // icon: 'chevron-right'
        }
      ]
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
  justify-content: space-around;
  .nav{
    width: 25%;
    height: 80px;
    background: $base-color;
    font-size: 36px;
    text-align: center;
    line-height: 80px;
    border-radius:3%;
    border: solid 1px #ddd;
    .icon{
      width: 30px;
      height: 30px;
    }
  }
}
</style>
