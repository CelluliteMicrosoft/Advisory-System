import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { SubjectsController } from './subjects/subjects.controller';
import { SubjectsService } from './subjects/subjects.service';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [StudentsModule, SubjectsModule],
  controllers: [AppController, SubjectsController],
  providers: [AppService, SubjectsService],
})
export class AppModule {}