<template>
  <div class="headerContainer">
    <div class="titleContainer">
      <div class="mainTitle title">PortFolio</div>
      <div class="subTitle title">With Vue.js</div>
    </div>
    <div class="navContainer">
      <div class="homeContainer nav">Home</div>
      <div class="myInfoContainer nav">About Me</div>
      <div class="codeContainer nav">Show Code</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import '../scss/Header.scss';
</style>
