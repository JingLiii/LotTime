<template>
  <ul class="navs">
      <li @click="goPage(index)" class="main-nav" v-for="(nav, index) in navs" >
        <icon class="icon" v-if="nav.awesomeIcon" v-bind:name="nav.awesomeIcon"></icon>
        <span>{{nav.text}}</span>
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
          awesomeIcon: 'umbrella'
        },
        {
          text: '记录',
          awesomeIcon: 'pencil'
        },
        {
          text: '发现',
          awesomeIcon: 'twitter'
        },
        {
          text: '个人',
          awesomeIcon: 'user'
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
  .main-nav{
    width: 25%;
    height: (50rem/16);
    background: #ddd;
    cursor: pointer;
    text-align: center;
    line-height: (75rem/16);
    position: relative;
    &:hover{
      .icon {
        color: $base_color;
      }
      span {
        color: $base_color;
      }
    }
    .icon {
      position: absolute;
      top: 22%;
      margin-left: (4rem/16);
      width: (16rem/16);
      height: (16rem/16);
    }
    span {
      font-size: (12rem/16);
    }
  }
}
</style>
