import { Controller, Get, UseGuards } from '@nestjs/common'
import { GamesService } from './games.service'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'


@Controller('games')
export class GamesController {

    constructor(private gameService: GamesService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    getAll() {
        return this.gameService.getAll()
    }
}