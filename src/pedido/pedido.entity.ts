import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { StatusPedido } from "./enum/statuspedido.enum";
import { UserEntity } from '../user/user.entity';


@Entity({name: 'pedidos'})
export class PedidoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'valor_total', nullable: false})
    valorTotal: number;

    @Column({name: 'status', enum: StatusPedido, nullable: false})
    status: StatusPedido;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: string;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: string;

    @ManyToOne(() => UserEntity, (user)=> user.pedidos)
    user: UserEntity;
}