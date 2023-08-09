import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDTO {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    price: number;
}