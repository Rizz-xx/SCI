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
let ProgressService = class ProgressService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createSession(dto) {
        const session = await this.prisma.quizSession.create({
            data: { studentName: dto.studentName },
        });
        return { sessionId: session.id };
    }
    async getSession(id) {
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
        if (!session)
            throw new NotFoundException('Sesi kuis tidak ditemukan');
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
};
ProgressService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof PrismaService !== "undefined" && PrismaService) === "function" ? _a : Object])
], ProgressService);
export { ProgressService };
//# sourceMappingURL=progress.service.js.map