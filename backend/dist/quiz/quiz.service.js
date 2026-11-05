var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
let QuizService = class QuizService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getQuestions() {
        const questions = await this.prisma.question.findMany({
            include: {
                options: {
                    select: {
                        id: true,
                        text: true,
                    },
                },
            },
            orderBy: { createdAt: 'asc' },
        });
        return questions;
    }
    async submitAnswer(dto) {
        const option = await this.prisma.option.findUnique({
            where: { id: dto.selectedOptionId },
            include: { question: true },
        });
        if (!option)
            throw new NotFoundException('Pilihan jawaban tidak ditemukan');
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
    async completeSession(dto) {
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
};
QuizService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof PrismaService !== "undefined" && PrismaService) === "function" ? _a : Object])
], QuizService);
export { QuizService };
//# sourceMappingURL=quiz.service.js.map