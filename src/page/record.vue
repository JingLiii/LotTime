<template>
  <div>
    <RecordBox 
      class="record-record_box"
      v-for="box in Boxs"
      :key="box.title"
      :img="box.imgUrl"
      :title="box.title"
      :eventName='box.event'
      :content="box.content"
    >
    </RecordBox>
  </div>
</template>

<script>
import RecordBox from '../components/RecordBox'

import img from '../config/images.js'

export default {
  components: {
    RecordBox
  },
  data () {
    return {
      Boxs: [
        {
          title: '摄影',
          event: 'tackPic',
          imgUrl: img.cameraReal,
          content: '一张照片记录你的美好点滴'
        },
        {
          title: '视频',
          event: 'tackVideo',
          imgUrl: img.dvReal,
          content: '生活每一步'
        },
        {
          title: '描述',
          event: 'tackText',
          imgUrl: img.penReal,
          content: '窗外.. 雨天.. 音乐.. 纸张..'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.record-record_box {
  margin: (15rem/14) auto;
  cursor: pointer;
}
</style>
