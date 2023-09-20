import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { Carrera } from './carrera.entity';

@Controller('carreras')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Get()
  async findAll(): Promise<Carrera[]> {
    return this.carreraService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Carrera> {
    return this.carreraService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createCarreraDto: CreateCarreraDto): Promise<Carrera> {
    return this.carreraService.create(createCarreraDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id') id: number,
    @Body() updateCarreraDto: UpdateCarreraDto,
  ): Promise<Carrera> {
    return this.carreraService.update(id, updateCarreraDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.carreraService.remove(id);
  }
}
