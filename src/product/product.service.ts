import { Repository } from "typeorm";
import { ProductEntity } from "./product.entity";
import { Injectable } from "@nestjs/common";
import { v4 as uuid} from 'uuid';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDTO } from "./dto/createProduct.dto";

@Injectable()
export class ProductService{
    constructor(@InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>){}

    async createUser(productData: CreateProductDTO) {
        const productEntity = new ProductEntity();
        productEntity.id = uuid();
        productEntity.name = productData.name;
        productEntity.value = productData.value;
        productEntity.category = productData.category;
        await this.productRepository.save(productEntity);
    }
}