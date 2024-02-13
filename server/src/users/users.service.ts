import { Injectable } from '@nestjs/common'
import { User } from './user.entity'


@Injectable()
export class UsersService {
    
    private readonly users = [
        {
            id: 1,
            login: 'player1',
            password: 'player1'
        },
        {
            id: 2,
            login: 'player2',
            password: 'player2'
        }
    ]

    async findOne(login: string): Promise<User | undefined> {
        return this.users.find(user => user.login === login)
    }
}