import { Module } from '@nestjs/common';
import { SubjectController } from './subjects.controller';
import { SubjectService } from './subjects.service';
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [SubjectController],
  providers: [SubjectService, PrismaService]
})
export class StudentsModule {}


