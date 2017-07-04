<template>
  <div class="time-box clearfix">
    <div class="time-box-header">
      <div class="head">
        <img :src="imgHeadUrl" alt="">
      </div>
      <div class="info">
        <div class="nickname">
          昵称
        </div>
        <div class="introduction">
          这是一个有趣的人
        </div>
      </div>
      <div class="time">
        7月4日
      </div>
    </div>
    <div class="time-box-main">
      <img :src="imgContent" alt="">
    </div>
    <div class="time-box-heart">
      <i class=""></i>
    </div>
    <div class="time-box-footer"></div>
  </div>
</template>

<script>
import img from '../config/images.js'

export default {
  data () {
    return {
      imgHeadUrl: img.head01,
      imgContent: img.cameraDraw
    }
  }
}
</script>

<style lang="scss">
.time-box {
  width: 95%;
  background-color: #fff;
  margin: (10rem/14) auto;
  .time-box-header{
    .head{
      float: left;
      width: (64rem/14);
      height: (64rem/14);
      position: relative;
      img{
        top: 50%;
        left: 50%;
        width: (40rem/14);
        position: absolute;
        height: (40rem/14);
        border-radius: 50%;
        margin-left: (-20rem/14);
        margin-top: (-20rem/14);
      }
    }
    .info{
      width: 55%;
      float: left;
      padding-top: (12rem/14);
      .nickname{
        margin: (4rem/14) 0;
        font-size: (24rem/14);
      }
      .introduction{
        font-size: (12rem/14);
      }
    }
    .time{
      float: left;
      height: (64rem/14);
      font-size: (10rem/14);
      line-height: (40rem/14);
    }
  }
  .time-box-main{
    img{
      width: 100%;
    }
  }
  .time-box-heart{
    height: (50rem/14);
    background-color: #ccc;
  }
  .time-box-footer{}
}
</style>

