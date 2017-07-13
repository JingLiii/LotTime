<template>
  <div class="my-alert">
    <ul>
      <li 
        v-for="data in dataObject"
        v-text="data.text"
        :key="data"
        @click="clickEvent(data.text)"
      >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['dataObject'],
  methods: {
    clickEvent: function (par) {
      this.$emit('clickEvent', par)
    }
  }
}
</script>

<style lang="scss">
.my-alert{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  ul{
    top: 50%;
    left: 50%;
    width: (180rem/14);
    position: absolute;
    margin-top: -(100rem/14);
    margin-left: -(90rem/14);
    li{
      width: 100%;
      color: #000;
      height: (50rem/14);
      text-align: center;
      font-size: (18rem/14);
      background-color: #fff;
      line-height: (50rem/14);
      margin: 0 0 (5rem/14) 0;
      border-radius: (5rem/14);
      box-shadow: 0px 1px 12px 0px;
    }
  }
}
</style>

