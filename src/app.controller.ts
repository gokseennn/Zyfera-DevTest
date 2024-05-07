import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './model/student.dto';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('create')
  createStudent(@Body() data: Student,) {
    return this.appService.createStudent(data,);
  }
}