import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'
import { useAppDispatch } from './appStore'
import { AuthService } from '../entities/auth/api/auth.service'
import { logout, refresh } from '../entities/auth/api/authSlice'


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

	return <RouterProvider router={appRouter} />
}


export default App