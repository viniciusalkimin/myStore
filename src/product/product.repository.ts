import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository{

    private products = [];

    async save(user) {
        this.products.push(user);
    }

    async listAll() {
        return this.products;
    }

} 