import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";


@Entity("product_atributes")
export class ProductAtributes {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "name", length: 100, nullable: false })
    name: string;

    @Column({ name: "description", length: 100, nullable: false })
    description: string;

    @ManyToOne(() => ProductEntity, (product) => product.atributes,{
        orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE'
    })
    product: ProductEntity

}