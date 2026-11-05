declare class AnswerItem {
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
}
export declare class CompleteQuizDto {
    sessionId: string;
    answers: AnswerItem[];
}
export {};
