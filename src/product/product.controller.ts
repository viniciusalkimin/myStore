import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./dto/createProduct.dto";
import { ProductService } from "./product.service";
import { v4 as uuid} from 'uuid';

@Controller('/products')
export class ProductController{

    constructor(private readonly productRepository: ProductRepository, private readonly productService: ProductService){
    }

    @Post()
    async createProduct(@Body() productData: CreateProductDTO) {
        productData.id = uuid();
        await this.productService.createUser(productData);
    }

    @Get()
    async listAllProducts() {
        return this.productRepository.listAll();
    }

}