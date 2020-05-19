<template>
  <div class="mainContainer">
    <div class="subContainer">
      <Header class="headerComponent"></Header>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Main',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import '../scss/Main.scss';
</style>
