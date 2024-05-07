// student.dto.ts

import { IsString, IsNotEmpty, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Column()
    name: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    surname: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    stdNumber: string;

    @OneToMany(() => Grade, grade => grade.student)
    @ValidateNested({ each: true })
    @Type(() => Grade)
    grades: Grade[];
}

@Entity()
export class Grade {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Column()
    code: string;

    @IsNumber()
    @IsNotEmpty()
    @Column('double precision')//double precision
    value: number;

    @ManyToOne(() => Student, student => student.grades)
    student: Student;
}
