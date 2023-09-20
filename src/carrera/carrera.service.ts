import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrera } from './carrera.entity';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,
  ) {}

  async findAll(): Promise<Carrera[]> {
    return await this.carreraRepository.find();
  }

  async findOne(id: number): Promise<Carrera> {
    const carrera = await this.carreraRepository.findOne({ where: { id } });
    if (!carrera) {
      throw new NotFoundException('Carrera no encontrada');
    }
    return carrera;
  }

  async create(createCarreraDto: CreateCarreraDto): Promise<Carrera> {
    const carrera = this.carreraRepository.create(createCarreraDto);
    return await this.carreraRepository.save(carrera);
  }

  async update(
    id: number,
    updateCarreraDto: UpdateCarreraDto,
  ): Promise<Carrera> {
    await this.carreraRepository.update(id, updateCarreraDto);
    return await this.carreraRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const carrera = await this.carreraRepository.findOne({ where: { id } });
    if (!carrera) {
      throw new NotFoundException('Carrera no encontrada');
    }
    await this.carreraRepository.remove(carrera);
  }
}
