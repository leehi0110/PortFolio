<template>
  <div class="mainContainer">
    <LoginComponent class="loginComponent" v-show="this.pageNum == 1"></LoginComponent>
    <LandingComponent class="landingComponent" v-show="this.pageNum == 2"></LandingComponent>
  </div>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue'
import LandingComponent from '../components/LandingComponent.vue'

export default {
  name: 'Main',
  components: {
    LoginComponent,
    LandingComponent
  },
  // watch: {
  //   nowPage (oldVal,newVal){
  //     newVal = this.$getter.store()
  //   }
  // }
  data() {
    return {
      pageNum: 1
    }
  }
}
</script>

<style lang="scss">
@import '../scss/Main.scss';
</style>
