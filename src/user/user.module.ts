import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { EmailsIsUniqueValidator } from "./validation/emailIsUnique.validator";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { UserRepository } from "./user.repository";

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity])],
    controllers:[UserController],
    providers:[EmailsIsUniqueValidator, UserService, UserRepository]
})
export class UserModule{}