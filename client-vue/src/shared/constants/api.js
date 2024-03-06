export const baseURL = 'http://localhost:5000/'

export const loginURL = 'auth/login'

export const checkAuthURL = 'auth/profile'

export const gamesURL = 'games'

export const headers = {
    Authorization: 'Bearer ' + localStorage.getItem('jwt_token'),
    'Content-Type': 'application/x-www-form-urlencoded'
}