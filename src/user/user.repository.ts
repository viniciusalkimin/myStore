import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { error } from "console";

@Injectable()
export class UserRepository {

    private users: UserEntity[] = [];

    async save(user: UserEntity) {
        this.users.push(user);
    }

    async listAll() {
        return this.users;
    }

    async userExistsByEmail(email: string) {
        const probableUser: UserEntity = this.users.find(
            user => user.email === email
        );
        return probableUser !== undefined;
    }

    async updateUser(id: string, updateData: Partial<UserEntity>) {
        const problableUser = this.users.find(
            savedUser => savedUser.id === id
        );
        if(!problableUser) {
            throw new error('User not found.');
        }
        Object.entries(updateData).forEach(([key, value]) => {
            if(key === id) {
                return;
            }
            problableUser[key] = value;
        });
        return problableUser;
    }

}