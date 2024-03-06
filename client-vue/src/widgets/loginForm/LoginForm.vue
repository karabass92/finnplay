<script>
import { mapGetters } from 'vuex';
import { instance } from '../../shared/api/api'
import LoginInput from '../../features/loginInput/LoginInput.vue'
import PasswordInput from '../../features/passwordInput/PasswordInput.vue'
export default {
    components: { LoginInput, PasswordInput },
    name: 'login-form',
    data() {
        return {
            login: '',
            password: '',
        }
    },
    methods: {
        async submitHandler() {
            try {
                const res = await instance.post('/auth/login', {
                    login: this.login,
                    password: this.password
                })
                localStorage.setItem('jwt_token', res.data.token)
                this.$store.dispatch('setUser', res.data)
                this.$store.dispatch('setError', null)
                this.$router.push('/')
            } catch (error) {
                this.$store.dispatch('setError', error.response.data.message)
            }
        },
    },
    computed: {
        ...mapGetters(['error'])
    }
}
</script>


<template>
    <form class="formContainer" @submit.prevent="this.submitHandler">
        <img src="../../shared/img/logo.svg" class="logo" alt="logo">
        <section class="inputSection">
            <login-input v-model="this.login" />
            <password-input v-model="this.password" />
        </section>
        <button class="btn">Login</button>
        <span v-if="error" class="formError">{{ error }}</span>
    </form>
</template>


<style scoped>
.formContainer {
    width: 412px;
    height: 363px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}

.logo {
    width: 70px;
    height: 70px;
}

.inputSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.btn {
    width: 100%;
    padding: 24px;
    border-radius: 4px;
    background-color: rgba(253, 188, 17, 1);
    box-shadow: 0 2px 18px 0 rgba(128, 128, 128, 0.1);
    text-align: center;
}
.formError {
    position: absolute;
    bottom: -35px;
    color: #DC0B35;
}
</style>