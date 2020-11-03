<template>
    <div class="wrapper">
        <div class="mainContainer">
            <input class="inputForID mainItem" type="text" placeholder="아이디를 입력해주세요" v-model="user.id">
            <input class="inputForPassword mainItem" type="password" placeholder="비밀번호를 입력해주세요" v-model="user.password">
            <button class="btnForLogin mainItem" v-on:click="LoginAction()">로그인 하기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            user: {
                id: '',
                password: ''
            }
        }
    },
    methods: {
        LoginAction() {
            if(this.user.id === '123' && this.user.password==='123') {
                this.$router.push('../main')
            }
            else {
                alert('로그인 실패 - 아이디와 비밀번호를 확인해주세요')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './Login.scss';
</style>>