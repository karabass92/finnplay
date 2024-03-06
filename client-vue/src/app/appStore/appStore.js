import Vuex from 'vuex'


const state = {
    session: {
        user: null,
        isAuth: false,
        isLoading: false,
        error: null
    }
}

// logout, login, setIsLoading, refresh

const store = new Vuex.Store({
    state,
    getters: {
        user: (state) => {
            return state.session.user
        },
        error: (state) => {
            return state.session.error
        },
        isAuth: (state) => {
            return state.session.isAuth
        }
    },
    actions: {
        setUser(context, user) {
            context.commit('setUser', user)
            context.commit('setAuth')
        },
        setError(context, error) {
            context.commit('setError', error)
        },
    },
    mutations: {
        setUser(state, user) {
            state.session.user = user
        },
        setError(state, error) {
            state.session.error = error
        },
        setAuth(state) {
            state.session.isAuth = true
        }
    }
})


export default store