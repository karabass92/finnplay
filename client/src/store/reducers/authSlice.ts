import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { IUser, IUserData, IUserMe } from '../../interfaces/interfaces'
import { AuthService } from '../services/auth.service'


export const loginAsync = (userData: IUserData) => async (dispatch: Function) => {
    try {
        dispatch(setIsLoading(true))
        const data = await AuthService
            .login(userData.login, userData.password)
            .catch(error => dispatch(setError(error.response.data.message)))
        dispatch(login(data))
        dispatch(setIsLoading(false))
    } catch (error) {
        console.log(error)
    }
}


interface IUserState {
    user: IUserMe | null,
    isAuth: boolean,
    isLoading: boolean,
    error: string | null
}


const initialState: IUserState = {
    user: null,
    isAuth: false,
    isLoading: false,
    error: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            if (action.payload?.token) {
                localStorage.setItem('jwt_token', action.payload.token)
                state.user = action.payload
                state.isAuth = true 
            }  
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        logout: (state) => {
            localStorage.removeItem('jwt_token')
            state.isAuth = false
            state.user = null
        },
        refresh: (state, action: PayloadAction<IUserMe>) => {
            if (action?.payload) {
                state.isAuth = true
                state.user = action.payload
            }
        }
    },
})


export const { logout, login, setError, setIsLoading, refresh } = authSlice.actions
export const selectAuth = (state: RootState) => state.session
export default authSlice.reducer