<template>
  <div @click="event" class="record-box clearfix">
    <div class="record-box-left">
      <img v-bind:src="img" alt="">
    </div>
    <div class="record-box-right">
      {{title}}
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RecordBox',
  props: ['title', 'img', 'content', 'eventName'],
  methods: {
    event: function (par) {
      // 这里的参数, 是鼠标的对象
      if (this.eventName === 'tackPic') {
        // 调起摄像头, 开始拍照
        this.tackPic()
      } else if (this.eventName === 'tackVideo') {
        this.tackVideo()
      } else if (this.eventName === 'tackText') {
        this.tackText()
      }
    },
    tackPic: function () {
      var _this = this
      this.$android.camera(function (err, imgUrl) {
        _this.$tools.err('调用相机失败', err)
        alert(imgUrl)
      })
    },
    tackVideo: function () {
      alert('tackVideo')
    },
    tackText: function () {
      alert('tackText')
    }
  }
}
</script>

<style lang="scss">
.record-box{
  width: 92%;
  background: #fff;
  height: (70rem/14);
  border-radius: (3rem/14);
  .record-box-left{
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
  .record-box-right{
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
