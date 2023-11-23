import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from "typeorm";
import { StatusPedido } from './enum/statuspedido.enum';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(PedidoEntity) private readonly pedidoRepository: Repository<PedidoEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    ){}

    async cadastraPedido(usuarioId: string) {
      const usuario = await this.userRepository.findOneBy({id: usuarioId});
      const pedidoEntity = new PedidoEntity();

      pedidoEntity.valorTotal = 0;
      pedidoEntity.status = StatusPedido.EM_PROCESSAMENTO;
      pedidoEntity.user = usuario;

      const pedidoCriado = await this.pedidoRepository.save(pedidoEntity);
      return pedidoCriado;
    }
}
