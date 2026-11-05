import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SubmitAnswerDto } from './dto/submit-answer.dto';
import { CompleteQuizDto } from './dto/complete-quiz.dto';

@Injectable()
export class QuizService {
  constructor(private prisma: PrismaService) {}

  async getQuestions() {
    const questions = await this.prisma.question.findMany({
      include: {
        options: {
          select: {
            id: true,
            text: true,
            // isCorrect TIDAK diexpose ke client
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    });
    return questions;
  }

  async submitAnswer(dto: SubmitAnswerDto) {
    const option = await this.prisma.option.findUnique({
      where: { id: dto.selectedOptionId },
      include: { question: true },
    });

    if (!option) throw new NotFoundException('Pilihan jawaban tidak ditemukan');
    if (option.questionId !== dto.questionId) {
      throw new NotFoundException('Pilihan tidak sesuai dengan pertanyaan');
    }

    const correctOption = await this.prisma.option.findFirst({
      where: { questionId: dto.questionId, isCorrect: true },
    });

    return {
      isCorrect: option.isCorrect,
      correctOptionId: correctOption?.id || '',
      explanation: correctOption?.explanation || 'Jawaban yang benar adalah pilihan tersebut.',
    };
  }

  async completeSession(dto: CompleteQuizDto) {
    const totalCorrect = dto.answers.filter(a => a.isCorrect).length;
    const totalWrong = dto.answers.length - totalCorrect;
    const percentage = dto.answers.length > 0
      ? Math.round((totalCorrect / dto.answers.length) * 100)
      : 0;
    const totalScore = percentage;

    const session = await this.prisma.quizSession.update({
      where: { id: dto.sessionId },
      data: {
        totalCorrect,
        totalWrong,
        totalQuestions: dto.answers.length,
        totalScore,
        percentage,
        completedAt: new Date(),
        answers: {
          createMany: {
            data: dto.answers.map(a => ({
              questionId: a.questionId,
              selectedOptionId: a.selectedOptionId,
              isCorrect: a.isCorrect,
            })),
          },
        },
      },
    });

    return {
      sessionId: session.id,
      totalScore: session.totalScore,
      totalCorrect: session.totalCorrect,
      totalWrong: session.totalWrong,
      totalQuestions: session.totalQuestions,
      percentage: session.percentage,
    };
  }
}
