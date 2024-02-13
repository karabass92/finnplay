import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Main from '../pages/Main/Main'
import Auth from '../pages/Auth/Auth'
import Error from '../pages/Error/Error'


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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