import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

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

}