import { BadRequestException, Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/users/user.entity'


@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(login: string, password: string): Promise<User> {
        const user = await this.usersService.findOne(login)
        if (user && user.password === password) return user
        throw new BadRequestException('Login or password is incorrect!')
    }

    async login(user: User) {
        const { id, login } = user
        return {
            id, 
            login,
            token: this.jwtService.sign({ 
                id: user.id, 
                login: user.login 
            }),
        }
    }
}