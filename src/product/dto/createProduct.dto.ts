import { IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator";
import { ProductAtributes } from "../product-atributes.entity";
import { ProductImages } from "../product-image.entity";

export class CreateProductDTO {

    id: string;

    @IsString()
    userId: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    value: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsNotEmpty()
    atributes: ProductAtributes[];

    @IsNotEmpty()
    images: ProductImages[];


}