<template>
  <header>
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
header {
  width: 100%;
  height: (50rem/14);
  background-color: $base_color;
  font-size: (26rem/14);
  color: #eee;
  text-align: center;
  line-height: (50rem/14);
}
</style>

