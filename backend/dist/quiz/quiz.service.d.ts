import { PrismaService } from '../prisma/prisma.service';
import { SubmitAnswerDto } from './dto/submit-answer.dto';
import { CompleteQuizDto } from './dto/complete-quiz.dto';
export declare class QuizService {
    private prisma;
    constructor(prisma: PrismaService);
    getQuestions(): Promise<any>;
    submitAnswer(dto: SubmitAnswerDto): Promise<{
        isCorrect: any;
        correctOptionId: any;
        explanation: any;
    }>;
    completeSession(dto: CompleteQuizDto): Promise<{
        sessionId: any;
        totalScore: any;
        totalCorrect: any;
        totalWrong: any;
        totalQuestions: any;
        percentage: any;
    }>;
}
