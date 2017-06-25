<template>
  <div class="box">
      <div class="ulBtn" @click="ulToggle">
        <span>{{chooseData}}</span>
        <icon class="icon" v-bind:name="IconName"></icon>
      </div>
      <ul v-show="ulShow">
        <li v-for="item in options" @click="changeChooseData(item)">
          {{item}}
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'MySelect',
    data () {
      return {
        ulShow: false,
        chooseData: ''
      }
    },
    props: ['options'],
    created () {
      this.chooseData = this.options[0]
    },
    computed: {
      IconName: function () {
        if (this.ulShow) {
          return 'caret-up'
        } else {
          return 'caret-down'
        }
      }
    },
    methods: {
      changeChooseData: function (item) {
        this.chooseData = item
        this.ulToggle()
        this.$emit('changeChooseData', item)
      },
      ulToggle: function () {
        if (this.ulShow) {
          this.ulShow = false
        } else {
          this.ulShow = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

@import '../style/base/_color.scss';

.box{
  width: (150rem/22);
  height: (40rem/22);
  position: relative;
  .ulBtn{
    width: (150rem/22);
    height: (40rem/22);
    background: none;
    outline: none;
    border: solid (1rem/22) #666;
    text-align: center;
    line-height: (40rem/22);
    .icon{
      position: absolute;
      top: (6rem/16);
      right: (10rem/16);
      width: (16rem/16);
      height: (16rem/16);
    }
  }
  ul{
    width: 100%;
    position: absolute;
    top: 100%;
    background: #fff;
    border-left: solid 1px #ddd;
    border-right: solid 1px #ddd;
    li{
      text-align: center;
      width: 100%;
      border-bottom: solid 1px #ddd;
      height: (28rem/16);
      line-height: (30rem/16);
      &:hover{
        background-color: $base_color;
        color: #fff;
      }
    }
  }
}
</style>
