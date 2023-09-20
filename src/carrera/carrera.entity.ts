import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Carrera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: number;

  @Column()
  año: number;

  @Column()
  semestre: number;

  @Column()
  sede: string;
}
