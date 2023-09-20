import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoController } from './alumno.controller';
import { AlumnoService } from './alumno.service';
import { Carrera } from 'src/carrera/carrera.entity';
import { Alumno } from './alumno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno, Carrera])],
  controllers: [AlumnoController],
  providers: [AlumnoService],
})
export class AlumnoModule {}
