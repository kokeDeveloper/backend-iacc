import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarreraDto {

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  codigo: number;

  @IsNumber()
  año: number;

  @IsNotEmpty()
  @IsNumber()
  semestre: number;

  @IsNotEmpty()
  @IsString()
  sede: string;
}
