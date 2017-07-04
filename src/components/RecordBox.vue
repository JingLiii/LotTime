<template>
  <div class="outer clearfix">
    <div class="left">
      <img v-bind:src="img" alt="">
    </div>
    <div class="right">
      {{title}}
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RecordBox',
  props: ['title', 'img', 'content']
}
</script>

<style lang="scss">
.outer{
  width: 92%;
  background: #fff;
  height: (70rem/14);
  border-radius: (3rem/14);
  .left{
    float: left;
    width: (70rem/14);
    height: (70rem/14);
    position: relative;
    img{
      top: 50%;
      left: 50%;
      width: (30rem/14);
      height: (30rem/14);
      border-radius: 50%;
      position: absolute;
      margin-top: (-15rem/14);
      margin-left: (-15rem/14);
    }
  }
  .right{
    width: 60%;
    color: #666;
    float: left;
    height: 100%;
    font-size: 20px;
    padding: (18rem/14) 0 0 0;
    p{
      margin: (6rem/14) 0 0 0;
    }
  }
}
</style>
