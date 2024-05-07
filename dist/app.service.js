"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_dto_1 = require("./model/student.dto");
let AppService = class AppService {
    constructor(studentRepository, gradeRepository) {
        this.studentRepository = studentRepository;
        this.gradeRepository = gradeRepository;
    }
    async createStudent(studentData) {
        const emptyFields = [];
        for (const [key, value] of Object.entries(studentData)) {
            if (value == '' && value == null) {
                emptyFields.push(key);
            }
        }
        if (emptyFields.length > 0) {
            return (`The following fields must be non-empty strings: ${emptyFields.join(', ')}`);
        }
        var isRegister = await this.studentRepository.findOne({ where: { stdNumber: studentData.stdNumber.toString() } }) == null;
        if (isRegister) {
            return this.createNewStudent(studentData);
        }
        else {
            return "Student already registered!";
        }
    }
    async createNewStudent(studentData) {
        try {
            const student = new student_dto_1.Student();
            Object.assign(student, studentData);
            await this.studentRepository.save(student);
            const uniqueGrades = {};
            studentData.grades.forEach(gradeData => {
                if (!uniqueGrades[gradeData.code]) {
                    uniqueGrades[gradeData.code] = [];
                }
                uniqueGrades[gradeData.code].push(gradeData.value);
            });
            for (const code of Object.keys(uniqueGrades)) {
                const grades = uniqueGrades[code];
                const average = grades.reduce((total, value) => total + value, 0) / grades.length;
                const grade = new student_dto_1.Grade();
                grade.code = code;
                grade.value = average;
                grade.student = student;
                await this.gradeRepository.save(grade);
            }
            return "Success!";
        }
        catch (error) {
            console.error(error);
            return "Failed!";
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_dto_1.Student)),
    __param(1, (0, typeorm_1.InjectRepository)(student_dto_1.Grade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AppService);
//# sourceMappingURL=app.service.js.map