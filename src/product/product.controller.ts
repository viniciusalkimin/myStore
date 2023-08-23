import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./dto/createProduct.dto";
import { ProductService } from "./product.service";
import { v4 as uuid} from 'uuid';
import { NewProduct } from "./dto/newProduct.dto";
import { async } from "rxjs";
import { UpdateProduct } from "./dto/updateProduct.dto";

@Controller('/products')
export class ProductController{

    constructor(private readonly productRepository: ProductRepository, private readonly productService: ProductService){
    }

    @Post()
    async createProduct(@Body() productData: CreateProductDTO) {
        const productCreated = await this.productService.createProduct(productData);
        return {
            message: "Product created",
            product: productCreated
        };
    }

    @Get()
    async listAllProducts() {
        return this.productService.listProducts();
    }

    @Put('/:id')
    async updateProduct(@Param('id') id: string, @Body() product: UpdateProduct ) {
        this.productService.updateProduct(id, product);
    }

    @Delete('/:id')
    async deleteProduct(@Param('id') id: string) {
        this.productService.deleteProduct(id);
    }

}