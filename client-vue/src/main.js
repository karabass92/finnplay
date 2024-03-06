import { createApp } from 'vue'
import App from './app/appEntry/App.vue'
import { appRouter } from './app/appRouter/appRouter'
import store from './app/appStore/appStore'
import './style.css'


const app = createApp(App)

app.use(appRouter)
app.use(store)
app.mount('#app')