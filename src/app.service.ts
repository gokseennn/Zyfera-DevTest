import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Grade, Student } from './model/student.dto';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(Grade)
    private gradeRepository: Repository<Grade>,
  ) { }

  async createStudent(studentData: Student): Promise<string> {
    const emptyFields = [];
    for (const [key, value] of Object.entries(studentData)) {
      if (value == '' && value == null) {
        emptyFields.push(key);
      }
    }
    if (emptyFields.length > 0) {
      return (`The following fields must be non-empty strings: ${emptyFields.join(', ')}`);//If the incoming value is null or empty, it returns an error.
    }


    var isRegister = await this.studentRepository.findOne({ where: { stdNumber: studentData.stdNumber.toString() } }) == null
    // If the student is not registered, it registers; if the student is registered, it returns an error.
    if (isRegister) {
      return this.createNewStudent(studentData);
    } else {
      return "Student already registered!";
    }
  }

  async createNewStudent(studentData: Student) {
    try {
      const student = new Student();
      Object.assign(student, studentData);

      await this.studentRepository.save(student);

      const uniqueGrades: { [code: string]: number[] } = {};

      studentData.grades.forEach(gradeData => {
        if (!uniqueGrades[gradeData.code]) {
          uniqueGrades[gradeData.code] = [];
        }
        uniqueGrades[gradeData.code].push(gradeData.value);
      });

      for (const code of Object.keys(uniqueGrades)) {
        const grades = uniqueGrades[code];
        const average = grades.reduce((total, value) => total + value, 0) / grades.length;

        const grade = new Grade();

        grade.code = code;
        grade.value = average;
        grade.student = student;

        await this.gradeRepository.save(grade);
      }

      return "Success!";
    } catch (error) {
      console.error(error);
      return "Failed!";
    }
  }

}