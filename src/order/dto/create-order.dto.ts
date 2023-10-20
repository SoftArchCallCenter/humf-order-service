import { ArrayNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"

class Menu {
    
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsString()
    description: string
}

export class CreateOrderDto {
    
    @IsString()
    userId: string

    @IsString()
    resId: string

    @ArrayNotEmpty()
    menus: Menu[]
}