import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "src/user/user.repository";
import { ProductRepository } from "./product.repository";

@Controller('/products')
export class ProductController{

    constructor(private productRepository: ProductRepository){
    }

    @Post()
    async createProduct(@Body() productData) {
        this.userRepository.save(productData);
        return productData;
    }

    @Get()
    async listAllProducts() {
        return this.userRepository.listAll();
    }

}