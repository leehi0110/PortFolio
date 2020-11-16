<template>
    <div class="wrapper">
        <div class="navigationContainer">
            <navigation></navigation>
        </div>
        <div class="contentsContainer">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navigation from '../../components/MainComponent/NavigationComponent/Navigation.vue'

export default {
    name: 'Main',
    components: {
        Navigation
    }
}
</script>

<style lang="scss" scoped>
@import './Main.scss';
</style>