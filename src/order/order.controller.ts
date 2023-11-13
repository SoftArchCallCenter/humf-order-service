import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete, 
  HttpCode, 
  Res,
  HttpStatus
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import mongoose from 'mongoose';
import { Response } from 'express';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createOrderDto: CreateOrderDto) {
    const result = this.orderService.createOrder(createOrderDto);
    return result
  }

  // @Get()
  // findAll() {
  //   return this.orderService.findAll();
  // }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string, @Res() res: Response) {
    // if(! mongoose.isValidObjectId(userId)){
    //   res.status(HttpStatus.BAD_REQUEST).json({err : "Invalid userId"})
    //   return;
    // }
    const result = await this.orderService.findByUser(userId);
    return res.status(HttpStatus.OK).json({result})
  }

  @Get('res/:resId')
  findByRestaurant(@Param('resId') resId: string) {
    return this.orderService.findByRestaurant(resId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // if(! mongoose.isValidObjectId(id)){
    //   res.status(HttpStatus.BAD_REQUEST).json({err : "Invalid object"})
    //   return;
    // }
    // const result = this.orderService.findOne(id);
    // return res.status(HttpStatus.OK).json({result})
    return this.orderService.findOne(id);

  }

  // @Patch(':id')
  // update() {
  //   return this.orderService.update();
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }

}
