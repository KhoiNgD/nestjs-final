import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['eaiofwdj'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove additional property from request that not exist in dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
