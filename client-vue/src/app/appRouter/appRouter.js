import { createRouter, createWebHashHistory} from 'vue-router'
import { routes } from './routes'


export const appRouter = createRouter({
    history: createWebHashHistory(),
    routes
})