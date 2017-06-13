<template>
  <!-- 首页 -->
  <div class="app">
    首页
  </div>
  <!-- /首页 -->
</template>

<script>

export default {
  data () {
    return {
      // lists: [],
    }
  },
  components: {},
  created () {
    // 组件创建完成后获取数据, 这里和1.0不一样, 改成了这个样子
    // this.get_data()
  },
  methods: {
    // get_data: function (params) {
    //   var v = this
    //   if (!params) params = {}
    //   // 我们这里使用全局绑定的 $api方法来获取数据
    //   v.$api.get('topics', params, function (r) {
    //     v.lists = r.data
    //   })
    // },
    goContent: function () {
      this.$router.push({
        path: '/content'
      })
    }
  }
}

</script>
