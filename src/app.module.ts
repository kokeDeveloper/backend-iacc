import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoModule } from './alumno/alumno.module';
import { CarreraModule } from './carrera/carrera.module';
import { Carrera } from './carrera/carrera.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'babar.db.elephantsql.com',
      port: 5432,
      username: 'uyigusky',
      password: 'aTexsAPm7rRtkchFGMGt3IUigwIooG8L',
      database: 'uyigusky',
      synchronize: true,
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    AlumnoModule,
    CarreraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
