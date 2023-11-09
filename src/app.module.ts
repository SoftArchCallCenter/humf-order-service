import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { DatabaseModule } from './databases/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        ORDER_SERVICE_MONGODB_SERVER: Joi.string().required(),
        ORDER_SERVICE_MONGODB_PORT: Joi.string().required(),
        ORDER_SERVICE_MONGODB_DATABASE: Joi.string().required(),
      }),
      envFilePath: './.env',
    }),
    OrderModule,
    DatabaseModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
