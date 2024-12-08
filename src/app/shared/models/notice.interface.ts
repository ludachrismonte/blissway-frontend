import { Violation } from "./violation.interface";

export interface Notice {
    id: number;
    violations: Violation[];
    noticeDate: string;
    dueDate: string;
}