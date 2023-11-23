import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { PedidoEntity } from "./pedido.entity";
import { ProductEntity } from "../product/product.entity";


@Entity({name: 'itens_pedidos'})
export class ItemPedidoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'quantidade', nullable: false})
    quantidade: number;

    @Column({name: 'preco_venda', nullable: false})
    precoVenda: number;

    @ManyToOne(() => PedidoEntity, (pedido) => pedido.itensPedido,{
        onDelete: 'CASCADE', onUpdate: 'CASCADE'
    })
    pedido: PedidoEntity;

    @ManyToOne(() => ProductEntity, (produto) => produto.itensPedido, {
        cascade:['update']
    })
    produto: ProductEntity;
}