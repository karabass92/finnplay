import { RouterProvider } from 'react-router-dom'
import { routes } from './constants/routes'
import { useAppDispatch } from './store/hooks'
import { AuthService } from './store/services/auth.service'
import { logout, refresh } from './store/reducers/authSlice'
import { useEffect } from 'react'


const App = () => {

	const dispatch = useAppDispatch()

	const checkAuth = async () => {
		const token = localStorage.getItem('jwt_token')
		try {
			if(token) {
				const data = await AuthService.getMe()
				if (data) {
					dispatch(refresh(data))
				} else {
					dispatch(logout())
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		checkAuth()
	}, [])

	return <RouterProvider router={routes} />
}


export default App