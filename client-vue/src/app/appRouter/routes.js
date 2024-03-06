import MainPage from '../../pages/MainPage.vue'
import AuthPage from '../../pages/AuthPage.vue'
import ErrorPage from '../../pages/ErrorPage.vue'


export const routes = [
    { path: '/', component: MainPage},
    { path: '/auth', component: AuthPage},
    { path: '/:pathMatch(.*)*', component: ErrorPage},
]