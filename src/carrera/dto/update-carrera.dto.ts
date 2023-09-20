import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCarreraDto {

  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  código: string;

  @IsNumber()
  @IsOptional()
  año: number;

  @IsNotEmpty()
  @IsString()
  semestre: number;

  @IsNotEmpty()
  @IsString()
  cede: string;
}
