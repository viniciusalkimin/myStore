import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("product_atributes")
export class ProductAtributes {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "name", length: 100, nullable: false })
    name: string;

    @Column({ name: "description", length: 100, nullable: false })
    description: string;

}