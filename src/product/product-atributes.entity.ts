import { Column, Entity } from "typeorm";


@Entity("atributes")
export class ProductAtributes {
    @Column({ name: "name", length: 100, nullable: false })
    name: string;

    @Column({ name: "description", length: 100, nullable: false })
    description: string;

}