<template>
  <div>
    <div class="shelter_outer"></div>
    <img :src="imgUrl" alt="">
  </div>
</template>

<script>
import img from '../config/images.js'
export default {
  name: 'Shelter',
  data () {
    return {
      imgUrl: img.loadingEat
    }
  }
}
</script>

<style lang="scss">
div {
  .shelter_outer {
    width: 100%;
    height: (999999999999999999999rem/14);
    background-color: #000;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  img {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -85px;
    margin-top: -80px;
    z-index: 2;
  }
}
</style>
