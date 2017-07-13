<template>
  <div class="record-box clearfix">

    <div @click="event" class="record-box_outer clearfix">
      <div class="record-box_left">
        <img v-bind:src="img" alt="">
      </div>
      <div class="record-box_right">
        {{title}}
        <p>{{content}}</p>
      </div>
    </div>

    <div v-if="cameraPicUrl" class="record-box_content">
      <img :src="cameraPicUrl" alt="">
    </div>

  </div>
</template>

<script>

export default {
  name: 'RecordBox',
  data () {
    return {
      cameraPicUrl: ''
    }
  },
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
      const _this = this
      this.$android.camera(function (err, imgUrl) {
        _this.$tools.err('调用相机失败', err)
        _this.cameraPicUrl = imgUrl
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
  border-radius: (3rem/14);
  .record-box_outer{
    .record-box_left{
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
    .record-box_right{
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
  .record-box_content{
    width: 100%;
    margin: 0 auto;
    background: #e1e1e1;
    padding: (5rem/14) 0;
    img{
      width: 95%;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
