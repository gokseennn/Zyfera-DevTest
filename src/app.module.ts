import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade, Student } from './model/student.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, Grade]),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ahmetgoksenakyildiz',//postgres 
      password: '123',
      database: 'ahmetgoksenakyildiz',
      entities: [
        Student, Grade
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }