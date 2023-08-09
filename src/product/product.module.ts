import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { UserRepository } from "src/user/user.repository";


@Module({
    controllers: [ProductController],
    providers:[UserRepository]
})
export class ProductModule {

}