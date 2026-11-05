import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessionDto } from './dto/create-session.dto';

@Injectable()
export class ProgressService {
  constructor(private prisma: PrismaService) {}

  async createSession(dto: CreateSessionDto) {
    const session = await this.prisma.quizSession.create({
      data: { studentName: dto.studentName },
    });
    return { sessionId: session.id };
  }

  async getSession(id: string) {
    const session = await this.prisma.quizSession.findUnique({
      where: { id },
      include: {
        answers: {
          select: {
            questionId: true,
            selectedOptionId: true,
            isCorrect: true,
          },
        },
      },
    });
    if (!session) throw new NotFoundException('Sesi kuis tidak ditemukan');
    return session;
  }

  async getHistory() {
    return this.prisma.quizSession.findMany({
      where: { completedAt: { not: null } },
      orderBy: { completedAt: 'desc' },
      take: 20,
      select: {
        id: true,
        studentName: true,
        totalScore: true,
        totalCorrect: true,
        totalQuestions: true,
        percentage: true,
        completedAt: true,
      },
    });
  }
}
