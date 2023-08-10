import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid} from 'uuid';
import { ListUser } from "./dto/listUser.dto";

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
}

