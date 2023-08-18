import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [UserModule, ProductModule, TypeOrmModule.forRootAsync({
    useClass: DbConfigService,
    inject: [DbConfigService]
  }), ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
