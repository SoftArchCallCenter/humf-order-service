import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const port = process.env.PORT || 5000;
  const host = process.env.ORDER_SERVICE_HOST || "127.0.0.1";

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, host);
}
bootstrap();
