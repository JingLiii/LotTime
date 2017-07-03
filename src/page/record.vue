<template>
  <div>
    记录
    <!--<icon name="chevron-right"></icon>-->
    <input type="text" v-model="msg">
    {{msg}}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: '<dd></dd>'
    }
  }
}
</script>
