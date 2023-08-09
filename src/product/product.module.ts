import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { UserRepository } from "src/user/user.repository";
import { ProductRepository } from "./product.repository";


@Module({
    controllers: [ProductController],
    providers:[ProductRepository]
})
export class ProductModule {

}