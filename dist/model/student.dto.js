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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grade = exports.Student = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
let Student = class Student {
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "surname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "stdNumber", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Grade, grade => grade.student),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Grade),
    __metadata("design:type", Array)
], Student.prototype, "grades", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.Entity)()
], Student);
let Grade = class Grade {
};
exports.Grade = Grade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Grade.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grade.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)('double precision'),
    __metadata("design:type", Number)
], Grade.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Student, student => student.grades),
    __metadata("design:type", Student)
], Grade.prototype, "student", void 0);
exports.Grade = Grade = __decorate([
    (0, typeorm_1.Entity)()
], Grade);
//# sourceMappingURL=student.dto.js.map