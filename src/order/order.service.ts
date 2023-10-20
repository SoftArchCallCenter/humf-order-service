import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {

    constructor(@InjectModel('Order') private orderModel: Model<Order>) {}
    
    async create(createOrderDto: CreateOrderDto) {
        const order = await this.orderModel.create(createOrderDto)
        return order
    }

    // async findAll() {
    //     const orders = await this.orderModel.find()
    //     return 
    // }

    async findByUser(userId: string) {
        const orders = await this.orderModel.find({userId})
        return orders
    }

    async findByRestaurant(resId: string) {
        const orders = await this.orderModel.find({resId})
        return orders
    }

    async findOne(id: string) {
        const order = await this.orderModel.findById(id)
        return order
    }

    // update() {
    //     return
    // }

    async remove(id: string) {
        const order = await this.orderModel.findByIdAndRemove(id)
        return order
    }
}