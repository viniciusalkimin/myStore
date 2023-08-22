import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { UserRepository } from "src/user/user.repository";
import { ProductRepository } from "./product.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";


@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    controllers: [ProductController],
    providers:[ProductRepository, ProductService]
})
export class ProductModule {

}