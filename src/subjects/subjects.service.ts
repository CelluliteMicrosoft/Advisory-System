import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SubjectService {
    constructor (private prisma: PrismaService){}
    async getStudents(){
        return this.prisma.subject.findMany({
            include:{ program: true},
        })
    }
}