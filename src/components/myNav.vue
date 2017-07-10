<template>
  <ul class="my-navs">
      <li @click="goPage(index)" :key="nav.text" class="main-nav" v-for="(nav, index) in navs" >
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
          path: '/'
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
      this.$emit('goPage', index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/base/_color.scss';

.my-navs{
  bottom: 0;
  width: 100%;
  display: flex;
  flex-flow: row;
  position: fixed;
  justify-content: space-around;
  .main-nav{
    width: 25%;
    cursor: pointer;
    background: #fff;
    height: (40rem/14);
    text-align: center;
    position: relative; 
    line-height: (68rem/14);
    &:hover{
      .icon {
        color: $base_color;
      }
      span {
        color: $base_color;
      }
    }
    .icon {
      top: 20%;
      width: (18rem/14);
      height: (18rem/14);
      position: absolute;
      margin-left: (3rem/14);
    }
    span {
      font-size: (12rem/14);
    }
  }
}
</style>
