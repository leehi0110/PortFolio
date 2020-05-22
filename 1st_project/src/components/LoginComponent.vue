<template>
  <div class="inputContainer">
    <div class="titleContainer">
      <h1 class="title">Login</h1>
      <h3 class="subTitle">For Portfolio</h3>
    </div>
    <div class="inputContainer">
      <input class="inputBox idBox" type="text" placeholder="Username" v-model="id">
      <input class="inputBox pwBox" type="password" placeholder="Password" v-model="password" v-on:keyup.enter="changePage">
      <input class="inputBox btnBox" type="submit" value="Sign in" v-on:click="changePage()">
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginComponent',
  data() {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    changePage() {
      if(this.id == 'leehi0110' && this.password == 'asdf6709'){
        this.$store.dispatch('Change_Page_Action','mainPage');
      }
      else {
        alert('Access deny')
      }
    }
  }
}
</script>

<style lang="scss">
@import '../scss/LoginComponent.scss';
</style>
