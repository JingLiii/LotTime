<template>
  <!-- 首页 -->
  <div class="app">
    首页
  </div>
  <!-- /首页 -->
</template>

<script>
var axios = require('axios')
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
      // console.log(axios)
      // axios.get('http://api.jisuapi.com/tv/query?appkey=edb2c1897774b60c&tvid=435&date=2015-06-13')
      axios.get('https://yesno.wtf/api')
      // axios.post('http://www.tuling123.com/openapi/api', {
      //   'key': '5933dd27ecd84599a8045202d22bc1da',
      //   'info': 'nihao'
      // })
      .then(function (data) {
        console.dir(data)
      })
      .catch(function (err) {
        console.dir(err)
      })
      // var _this = this
      // var info = {
      //   appkey: 'edb2c1897774b60c'
      // }
      // // 我们这里使用全局绑定的 $api方法来获取数据
      // _this.$api.get('channel', info, function (data) {
      //   console.log(data)
      // })
    }
  }
}

</script>
