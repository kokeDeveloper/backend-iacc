import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraController } from './carrera.controller';
import { CarreraService } from './carrera.service';
import { Carrera } from './carrera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrera])],
  controllers: [CarreraController],
  providers: [CarreraService],
})
export class CarreraModule {}