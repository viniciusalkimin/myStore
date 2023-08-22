import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { ListUser } from "./dto/listUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>){}

        async listUsers(){
            const users = await this.userRepository.find();
            const usersDto = users.map(
                (user) => new ListUser(user.id, user.name)
            )
            return usersDto;
        }

        async createUser(user: UserEntity) {
            this.userRepository.save(user);
            return new ListUser(user.id, user.name);
        }

        async deleteUser(id: string) {
            const deleteResult = await this.userRepository.delete(id);
            if(deleteResult === null || undefined) {
                return false;
            }
            return true;
        }

        async updateUser(id: string, user: Partial<UpdateUserDTO>) {
            await this.userRepository.update(id, user)
        }
}