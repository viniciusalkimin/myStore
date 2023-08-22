import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDTO {

    id: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    value: number;

    @IsString()
    @IsNotEmpty()
    category: string;
}