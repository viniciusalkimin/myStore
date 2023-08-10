import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {

    private users = [];

    async save(user) {
        this.users.push(user);
    }

    async listAll() {
        return this.users;
    }

    async userExistsByEmail(email: string) {
        const probableUser = this.users.find(
            user => user.email === email
        );
        return probableUser !== undefined;
    }

}