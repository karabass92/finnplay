export const baseURL: string = 'http://localhost:5000/'

export const loginURL: string = 'auth/login'

export const checkAuthURL: string = 'auth/profile'

export const gamesURL: string = 'games'

export const headers = {
    Authorization: 'Bearer ' + localStorage.getItem('jwt_token'),
    'Content-Type': 'application/x-www-form-urlencoded'
}