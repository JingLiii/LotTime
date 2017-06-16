<template>
  <!-- 首页 -->
  <div class="app">
    首页
  </div>
  <!-- /首页 -->
</template>

<script>
// var axios = require('axios')
export default {
  data () {
    return {
      lists: []
    }
  },
  components: {},
  created () {
    // 组件创建完成后获取数据, 这里和1.0不一样, 改成了这个样子
    this.get_data()
  },
  methods: {
    get_data: function () {
      // console.log(this.$jQuery)
      this.$jQuery.ajax({
        url: 'http://api.jisuapi.com/train/station2s',
        type: 'post',
        dataType: 'jsonp',
        data: {
          appkey: 'edb2c1897774b60c',
          start: '北京',
          end: '上海',
          ishigh: 0
        },
        success: function (data) {
          console.log(data)
        }
      })
    }
  }
}

</script>
