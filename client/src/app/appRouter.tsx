import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import Main from '../pages/Main/Main'
import Auth from '../pages/Auth/Auth'
import Error from '../pages/Error/Error'


export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Main />
            }
        ]
    },
    {
        path: 'auth',
        element: <Auth />,
        errorElement: <Error />
    },
]) 