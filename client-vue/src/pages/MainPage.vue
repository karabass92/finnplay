<script>
import { mapGetters } from 'vuex';
import { instance } from '../shared/api/api';
export default {
    name: 'main-page',
    computed: {
        ...mapGetters(['user'])
    },
    async mounted() {
        const data = await instance.get('/games')
        console.log(data)
    },
    methods: {
        logout() {
            this.$router.push('/auth')
            localStorage.removeItem('jwt_token')
            this.$store.dispatch('setUser', null)
        }
    }
}
</script>


<template>
    <div>

        <header class="headerContainer">
            <div class="headerContent">
                <router-link to="/">
                    <img src="../shared/img/logo.svg" alt="logo">
                </router-link>
                <section class="userInfo">
                    <p>{{ user?.login }}</p>
                    <img src="../shared/img/logout.svg" alt="logout" @click="logout">
                </section>
            </div>
        </header>

        <main>
            MAIN PAGE
        </main>

    </div>
</template>


<style scoped>
/*****************************************/
.headerContainer {
    box-shadow: 0 2px 18px 0 rgba(128, 128, 128, 0.1);
}
.headerContent {
    max-width: 1440px;
    margin-inline: auto;
    padding: 0 min(82px, 5.7%);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.userInfo {
    display: flex;
    gap: 41px;

}
.userInfo > img {
    cursor: pointer;
}
@media(max-width:428px){
    .headerContent {
        padding: 12px 24px 0 24px;
    }
}
/*****************************************/


</style>