import { QuizService } from './quiz.service';
import { SubmitAnswerDto } from './dto/submit-answer.dto';
import { CompleteQuizDto } from './dto/complete-quiz.dto';
export declare class QuizController {
    private readonly quizService;
    constructor(quizService: QuizService);
    getQuestions(): any;
    submitAnswer(dto: SubmitAnswerDto): any;
    completeSession(dto: CompleteQuizDto): any;
}
