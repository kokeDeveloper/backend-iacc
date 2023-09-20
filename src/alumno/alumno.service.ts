import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './alumno.entity';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Carrera } from 'src/carrera/carrera.entity';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private readonly alumnoRepository: Repository<Alumno>,
    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,
  ) {}

  async findAll(): Promise<Alumno[]> {
    return await this.alumnoRepository.find();
  }

  async findOne(id: number): Promise<Alumno> {
    const alumno = await this.alumnoRepository.findOne({ where: { id } });
    if (!alumno) {
      throw new NotFoundException('Alumno no encontrado');
    }
    return alumno;
  }

  async create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    const alumno = this.alumnoRepository.create(createAlumnoDto);
    return await this.alumnoRepository.save(alumno);
  }


  async update(id: number, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno> {
    await this.alumnoRepository.update(id, updateAlumnoDto);
    return await this.alumnoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const alumno = await this.alumnoRepository.findOne({ where: { id } });
    if (!alumno) {
      throw new NotFoundException('Alumno no encontrado');
    }

    await this.alumnoRepository.remove(alumno);
  }
}
