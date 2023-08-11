import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid} from 'uuid';
import { ListUser } from "./dto/listUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";

@Controller('/users')
export class UserController{

    constructor(private userRepository: UserRepository){
    }

    @Post()
    async createUser(@Body() userData: CreateUserDTO) {
        const userEntity = new UserEntity();
        userEntity.email = userData.email;
        userEntity.name = userData.name;
        userEntity.password = userData.password;
        userEntity.id = uuid();
        this.userRepository.save(userEntity);
        return {
            user: new ListUser(userEntity.id, userEntity.name),
            message: 'User created.'
        };
    }

    @Get()
    async listAllUser() {
        const usersList = await this.userRepository.listAll();
        const userListDTO = usersList.map(
            user => new ListUser(user.id, user.name)
        );
        return userListDTO;
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() userDate: UpdateUserDTO) {
        const updatedUser = await this.userRepository.updateUser(id, userDate);
        
        return {
            user: updatedUser,
            message: "User updated successfully"
        };
    }

    @Delete("/:id")
    async deleteUser(@Param('id')id: string) {
        const userDeleted = await this.userRepository.deleteById(id);
        return {
            user: userDeleted,
            message: 'User deleted successfully'
        };
    }
}
