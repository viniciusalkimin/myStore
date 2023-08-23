import { Repository } from "typeorm";
import { ProductEntity } from "./product.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDTO } from "./dto/createProduct.dto";
import { NewProduct } from "./dto/newProduct.dto";

@Injectable()
export class ProductService{
    constructor(@InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>){}

    async createProduct(productData: CreateProductDTO) {
        const productEntity = new ProductEntity();
        productEntity.userId = productData.userId;
        productEntity.name = productData.name;
        productEntity.value = productData.value;
        productEntity.quantity = productData.quantity;
        productEntity.description = productData.description;
        productEntity.category = productData.category;
        productEntity.atributes = productData.atributes;
        productEntity.images = productData.images;
        await this.productRepository.save(productEntity);
        return productEntity;
    }

    async listProducts() {
        const users = await this.productRepository.find();
        return users;
    }

    async deleteProduct(id: string) {
        await this.productRepository.delete(id);
    }

    async updateProduct(id: string, product: Partial<ProductEntity>) {
        await this.productRepository.update(id, product);
    }
} 