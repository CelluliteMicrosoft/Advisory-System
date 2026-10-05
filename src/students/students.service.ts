import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class StudentsService {
    constructor (private prisma: PrismaService){}
    async getStudents(){
        return this.prisma.student.findMany({
            include:{ program: true},
        })
    }
}