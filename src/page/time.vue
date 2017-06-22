<template>
  <div>
    <h1>时光页, 也就是主页</h1>
    <h3>选中的选项是: {{chooseData}}</h3>
    <my-select :options="Lists" v-on:changeChooseData="testFuc"></my-select>
  </div>
</template>

<script>
import MySelect from '@/components/MySelect'

export default {
  components: {
    MySelect
  },
  data () {
    return {
      Lists: ['选项一', '选项二', '选项三'],
      chooseData: ''
    }
  },
  methods: {
    testFuc: function (params) {
      this.chooseData = params
    }
  }
}
</script>
