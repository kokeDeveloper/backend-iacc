import { Carrera } from 'src/carrera/carrera.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @Column()
  edad: number;

  @Column()
  direccion: string;

  @ManyToMany(() => Carrera)
  @JoinTable({
    name: 'alumnos_carreras',
    joinColumn: {
      name: 'alumnoId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'carreraId',
      referencedColumnName: 'id',
    },
  })
  carrera: Carrera[];
}
