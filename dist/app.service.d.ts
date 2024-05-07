import { Repository } from 'typeorm';
import { Grade, Student } from './model/student.dto';
export declare class AppService {
    private studentRepository;
    private gradeRepository;
    constructor(studentRepository: Repository<Student>, gradeRepository: Repository<Grade>);
    createStudent(studentData: Student): Promise<string>;
    createNewStudent(studentData: Student): Promise<"Success!" | "Failed!">;
}
