import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'


async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true })
    const config = app.get(ConfigService)
    const port = config.get<number>('API_PORT') || 5000
    await app.listen(port, async () => console.log(`Server started on ${port} port!`))
}


bootstrap();