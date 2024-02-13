import { instance } from '../http/axios.api'
import { IUser, IUserMe } from '../../interfaces/interfaces'
import { loginURL, checkAuthURL} from '../../constants/api'


export const AuthService = {

    async login(login: string, password: string): Promise<IUser | undefined> {
        const response = await instance.post<IUser>(loginURL, { 
            login: login, 
            password: password 
        })
        return response.data
    },

    async getMe(): Promise<IUserMe | undefined> {
        const response = await instance.get(checkAuthURL)
        if (response.data) return response.data
    }
}