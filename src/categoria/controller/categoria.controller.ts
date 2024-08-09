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
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../entity/categoria.entity';
  
  @Controller('/categorias')
  export class CategoriaController {
    constructor(readonly categoriaService: CategoriaService) {}
  
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
      return this.categoriaService.findAll();
    }
  
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
      return this.categoriaService.findById(id);
    }
  
    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByCargo(@Param('descricao') descricao: string): Promise<Categoria[]> {
      return this.categoriaService.findBydescricao(descricao);
    }
  
    @Get('/tipo/:tipo')
    @HttpCode(HttpStatus.OK)
    findByTipo(@Param('tipo') tipo: string): Promise<Categoria[]> {
      return this.categoriaService.findByTipo(tipo);
    }
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria): Promise<Categoria> {
      return this.categoriaService.create(categoria);
    }
  
   
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: Categoria): Promise<Categoria> {
      return this.categoriaService.update(categoria);
    }
  
    
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
      return this.categoriaService.delete(id);
    }
  }
  