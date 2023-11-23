import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from "typeorm";
import { StatusPedido } from './enum/statuspedido.enum';
import { ItemPedidoEntity } from './itempedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(PedidoEntity) private readonly pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    ){}

    async cadastraPedido(usuarioId: string, dadosPedido: CreatePedidoDto) {
      const usuario = await this.userRepository.findOneBy({id: usuarioId});
      const pedidoEntity = new PedidoEntity();

      pedidoEntity.status = StatusPedido.EM_PROCESSAMENTO;
      pedidoEntity.user = usuario;

        const itensPedidoEntidades = dadosPedido.itensPedido.map((itemPedido) => {
        const itemPedidoEntity = new ItemPedidoEntity();
        itemPedidoEntity.quantidade = 10;
        itemPedidoEntity.precoVenda = itemPedido.quantidade;
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
