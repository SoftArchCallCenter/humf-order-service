require('dotenv').config()
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [OrderModule,
    MongooseModule.forRootAsync({
      useFactory:async () => ({
        uri: process.env.MONGODB_URL
      })
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
