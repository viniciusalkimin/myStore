import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductAtributes } from "./product-atributes.entity";
import { ProductImages } from "./product-image.entity";


@Entity({ name: 'products'})
export class ProductEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user_id', length: 100, nullable: false })
    userId: string;

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'value', nullable: false })
    value: number;

    @Column({ name: 'quantity', nullable: false })
    quantity: number;

    @Column({ name: 'description', length: 255, nullable: false })
    description: string;

    @Column({ name: 'category', length: 100, nullable: false })
    category: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: string;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: string;

    @OneToMany(() => ProductAtributes, (productAtributes) => productAtributes.product, { cascade: true, eager: true})
    atributes: ProductAtributes[];

    @OneToMany(() => ProductImages, (productImages) => productImages.product, { cascade: true, eager: true})
    images: ProductImages[];

}