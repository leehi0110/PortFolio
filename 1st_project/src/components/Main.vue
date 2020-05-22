<template>
  <div class="mainContainer">
    <div class="subContainer">
      <LoginComponent class="loginComponent" v-show="this.page == 'loginPage'"></LoginComponent>
      <LandingComponent class="landingComponent" v-show="this.page == 'mainPage'"></LandingComponent>
    </div>
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
  data() {
    return {
      page: 'mainPage'
    }
  },
  // mounted() {
  //   this.page = this.$store.getters.Get_Page
  // },
  // computed: {
  //   isChange () {
  //     return this.$store.getters.Get_Page;
  //   }
  // },
  // watch: {
  //   isChange() {
  //     this.page = this.$store.getters.Get_Page;
  //   }
  // }
}
</script>

<style lang="scss">
@import '../scss/Main.scss';
</style>
