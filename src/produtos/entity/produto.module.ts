import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProdutoService } from '../service/produto.service';
import { Produto } from './produto.entity';
import { CategoriaModule } from '../../categoria/entity/categoria.module';
import { CategoriaService } from '../../categoria/service/categoria.service';
import { ProdutoController } from '../controller/produto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  providers: [ProdutoService, CategoriaService],
  controllers: [ProdutoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}
