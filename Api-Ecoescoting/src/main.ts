import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config/constans';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = +configService.get<number>(SERVER_PORT);
  app.enableCors();
  await app.listen(port);
  // console.log(`listening on port ${await app.getUrl()}`);
}
bootstrap();
