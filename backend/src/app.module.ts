import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { QuizModule } from './quiz/quiz.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [PrismaModule, QuizModule, ProgressModule],
})
export class AppModule {}
