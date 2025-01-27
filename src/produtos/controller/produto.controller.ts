import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { DeleteResult } from 'typeorm';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../entity/produto.entity';
 
  @Controller('/produtos')
  export class ProdutoController {
    constructor(readonly produtoService: ProdutoService) {}
  
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
      return this.produtoService.findAll();
    }
  
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
      return this.produtoService.findById(id);
    }
  
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findBynome(@Param('nome') nome: string): Promise<Produto[]> {
      return this.produtoService.findBynome(nome);
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findBydescricao(@Param('descricao') descricao: string): Promise<Produto[]> {
      return this.produtoService.findByDescricao(descricao);
    }
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto> {
      return this.produtoService.create(produto);
    }
  
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto> {
      return this.produtoService.update(produto);
    }
  
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
      return this.produtoService.delete(id);
    }
  }
  