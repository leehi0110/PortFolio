<template>
    <div class="wrapper">
        <div class="navigationContainer">
            <p class="title">PortFolio</p>
            <div class="routerLinkContainer">
                <router-link class="loginLink routerLink" to="/">Login</router-link>
                <router-link class="signupLink routerLink" to="/signup">Sign Up</router-link>
                <router-link class="findpasswordLink routerLink" to="../findpassword">Find Password</router-link>
                <router-link to="../findPassword/resetpassword"></router-link>
            </div>
        </div>
        <div class="componentContainer">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LandingPage'
}
</script>

<style lang="scss" scoped>
@import './LandingPage.scss';
</style>>