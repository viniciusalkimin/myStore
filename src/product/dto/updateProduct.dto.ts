import { IsOptional } from "class-validator";
import { ProductAtributes } from "../product-atributes.entity";
import { ProductImages } from "../product-image.entity";

export class UpdateProduct{
    
    @IsOptional()
    userId: string;

    @IsOptional()
    name: string;

    @IsOptional()
    value: number;

    @IsOptional()
    quantity: number;

    @IsOptional()
    description: string;

    @IsOptional()
    category: string;

    @IsOptional()
    atributes: ProductAtributes[];

    @IsOptional()
    images: ProductImages[];
    
}