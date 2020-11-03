<template>
    <div class="wrapper">
        <div class="navigationContainer">
            <router-link to="../main">메인</router-link>
            <router-link to="../main/page1">페이지1</router-link>
            <router-link to="../main/page2">페이지2</router-link>
            <router-link to="../main/page3">페이지3</router-link>
        </div>
        <div class="contentsContainer">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainPage'
}
</script>

<style lang="scss" scoped>
@import './MainPage.scss';
</style>