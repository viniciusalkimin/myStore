import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity';
import { UserEntity } from '../user/user.entity';
import { In, Repository } from "typeorm";
import { StatusPedido } from './enum/statuspedido.enum';
import { ItemPedidoEntity } from './itempedido.entity';
import { ProductEntity } from '../product/product.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(PedidoEntity) private readonly pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ProductEntity) private readonly produtoRepository: Repository<ProductEntity>,
    ){}

    async cadastraPedido(usuarioId: string, dadosPedido: CreatePedidoDto) {
      const usuario = await this.userRepository.findOneBy({id: usuarioId});
      const produtosIds = dadosPedido.itensPedido.map((itemPedido) => itemPedido.produtoId);
      const pedidoEntity = new PedidoEntity();
      const produtosRelacionados = await this.produtoRepository.findBy({id:In(produtosIds)});

      pedidoEntity.status = StatusPedido.EM_PROCESSAMENTO;
      pedidoEntity.user = usuario;

      const itensPedidoEntidades = dadosPedido.itensPedido.map((itemPedido) => {
      const produtoRelacionado = produtosRelacionados.find((produto) => produto.id === itemPedido.produtoId);
      const itemPedidoEntity = new ItemPedidoEntity();
      itemPedidoEntity.produto = produtoRelacionado;
      itemPedidoEntity.quantidade = itemPedido.quantidade; 
      itemPedidoEntity.precoVenda = produtoRelacionado.value;
      itemPedidoEntity.produto.quantity -= itemPedido.quantidade;
      return itemPedidoEntity;
      });

      const valorTotal = itensPedidoEntidades.reduce((total, item) => {
        return total + item.precoVenda * item.quantidade;
      },0);

      pedidoEntity.itensPedido = itensPedidoEntidades;
      pedidoEntity.valorTotal = valorTotal;

      const pedidoCriado = await this.pedidoRepository.save(pedidoEntity);
      return pedidoCriado;
    }
}
