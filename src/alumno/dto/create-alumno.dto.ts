import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNumber,
  IsEmail,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { CreateCarreraDto } from 'src/carrera/dto/create-carrera.dto';

export class CreateAlumnoDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEmail()
  email: string;

  @IsNumber()
  edad: number;

  @IsString()
  direccion: string;

  @IsArray()
  @ValidateNested({ each: true })
  carrera: CreateCarreraDto[];
}

export class UpdateAlumnoDto extends PartialType(CreateAlumnoDto) {}
