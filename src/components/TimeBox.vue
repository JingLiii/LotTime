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
      <icon class="icon" name="heart"></icon>
      <img :src="imgContent" alt="">
      <img :src="imgContent" alt="">
      <img :src="imgContent" alt="">
      <img :src="imgContent" alt="">
    </div>

    <div class="time-box-footer">
      <icon class="icon" name="heart-o"></icon>
      <icon class="icon" name="commenting-o"></icon>
      <icon class="icon" name="hand-o-right"></icon>
      <icon class="icon" name="share"></icon>
    </div>
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
        cursor: pointer;
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
    padding: (8rem/14) (25rem/14) 0 (25rem/14);
    img{
      width: 100%;
    }
  }
  .time-box-heart{
    height: (50rem/14);
    padding: (10rem/14) (25rem/14) 0 (32rem/14);
    .icon{
      color: #ff4b25;
      width: (15rem/14);
      height: (15rem/14);
      vertical-align: middle;
      margin: 0 (7rem/14) 0 0;
    }
    img{
      cursor: pointer;
      width: (26rem/14);
      height: (26rem/14);
      border-radius: 50%;
      margin: 0 (6rem/14) 0 0;
    }
  }
  .time-box-footer{
    height: (42rem/14);
    padding: 0 (36rem/14);
    line-height: (58rem/14);
    border-top: solid 1px #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon{
      cursor: pointer;
      width: (15rem/14);
      height: (15rem/14);
    }
  } 
}
</style>

