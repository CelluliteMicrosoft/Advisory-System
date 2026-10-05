import { Controller, Get } from '@nestjs/common';
import { SubjectService } from './subjects.service';

@Controller('subject')
export class SubjectController {
    constructor(
        private readonly subject: SubjectService
    ){}

    @Get()
    getStudents() {
        return this.subject.getStudents();
    }
}
