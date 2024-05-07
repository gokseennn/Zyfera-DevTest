export declare class Student {
    id: number;
    name: string;
    surname: string;
    stdNumber: string;
    grades: Grade[];
}
export declare class Grade {
    id: number;
    code: string;
    value: number;
    student: Student;
}
