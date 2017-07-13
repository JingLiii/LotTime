<template>
  <div>
    <RecordBox 
      v-for="box in Boxs"
      :key="box.title"
      :title="box.title"
      :content="box.content"
      :img="box.imgUrl"
      :eventName='box.event'
      class="record_box"
    >
    </RecordBox>
  <p>{{test}}</p>
  </div>
</template>

<script>
import RecordBox from '../components/RecordBox'

import img from '../config/images.js'

var name = 'zhangrh'
var str = `这 <em>${name}</em> 是一个姓名, ${name}`

export default {
  components: {
    RecordBox
  },
  data () {
    return {
      test: str,
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
.record_box {
  margin: (15rem/14) auto;
  cursor: pointer;
}
</style>
