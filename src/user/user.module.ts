import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { EmailsIsUniqueValidator } from "./validation/emailIsUnique.validator";

@Module({
    imports:[],
    controllers:[UserController],
    providers:[UserRepository, EmailsIsUniqueValidator]
})
export class UserModule{}