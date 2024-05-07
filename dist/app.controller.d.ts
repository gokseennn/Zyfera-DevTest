import { AppService } from './app.service';
import { Student } from './model/student.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createStudent(data: Student): Promise<string>;
}
