import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid} from 'uuid';
import { UpdateUserDTO } from "./dto/updateUser.dto";
import { UserService } from "./user.service";

@Controller('/users')
export class UserController{

    constructor(private userRepository: UserRepository, private userService: UserService){
    }

    @Post()
    async createUser(@Body() userData: CreateUserDTO) {
        const userEntity = new UserEntity();
        userEntity.name = userData.name;
        userEntity.email = userData.email;
        userEntity.password = userData.password;
        userEntity.id = uuid();
        const userCreated = await this.userService.createUser(userEntity);
        return {
            user: userCreated,
            message: 'User created.'
        };
    }

    @Get()
    async listAllUser() {
        return await this.userService.listUsers();
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() userDate: UpdateUserDTO) {
        const updatedUser = await this.userService.updateUser(id, userDate);
        
        return {
            user: updatedUser,
            message: "User updated successfully"
        };
    }

    @Delete("/:id")
    async deleteUser(@Param('id')id: string) {
        const userDeleted = await this.userService.deleteUser(id);
        return {
            isDeleted: userDeleted,
            message: 'The result of operation is :' + userDeleted,
        };
    }
}
