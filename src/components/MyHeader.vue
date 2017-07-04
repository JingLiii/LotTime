<template>
  <header class="my-header">
    {{title}}
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  props: ['title']
}
</script>

<style lang="scss">
@import '../style/base/_color.scss';
.my-header {
  width: 100%;
  color: #eee;
  text-align: center;
  height: (50rem/14);
  font-size: (26rem/14);
  line-height: (50rem/14);
  background-color: $base_color;
}
</style>

