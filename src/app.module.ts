import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';
import { PedidoModule } from './pedido/pedido.module';


@Module({
  imports: [UserModule, ProductModule, TypeOrmModule.forRootAsync({
    useClass: DbConfigService,
    inject: [DbConfigService]
  }), ConfigModule.forRoot({
    isGlobal: true
  }), PedidoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
