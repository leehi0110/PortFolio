<template>
    <div class="wrapper">
        <div class="formContainer">
            <input class="inputForId formItem" type="text" placeholder="ID">
            <input class="inputForPassword formItem" type="text" placeholder="Password">
            <button @click="Login" class="btnForLogin formItem">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    methods: {
        Login() {
            this.$router.push('/main')
        }
    }
}
</script>

<style lang="scss" scoped>
@import './Profile.scss';
</style>