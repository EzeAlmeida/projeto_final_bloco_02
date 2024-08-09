import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/entity/categoria.module';
import { Categoria } from './categoria/entity/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia',
      entities: [Categoria],
      synchronize: true,
    }),
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
