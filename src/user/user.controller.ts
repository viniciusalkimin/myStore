import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Controller('/users')
export class UserController{

    constructor(private userRepository: UserRepository){
    }

    @Post()
    async createUser(@Body() userData) {
        this.userRepository.save(userData);
        return userData;
    }

    @Get()
    async listUser() {
        return this.userRepository.listAll()
    }
}