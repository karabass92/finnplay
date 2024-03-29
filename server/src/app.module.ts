import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GamesModule } from './games/games.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '../.env'
        }),
        UsersModule,
        AuthModule,
        GamesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }