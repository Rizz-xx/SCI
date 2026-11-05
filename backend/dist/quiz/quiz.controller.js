var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { SubmitAnswerDto } from './dto/submit-answer.dto';
import { CompleteQuizDto } from './dto/complete-quiz.dto';
let QuizController = class QuizController {
    quizService;
    constructor(quizService) {
        this.quizService = quizService;
    }
    getQuestions() {
        return this.quizService.getQuestions();
    }
    submitAnswer(dto) {
        return this.quizService.submitAnswer(dto);
    }
    completeSession(dto) {
        return this.quizService.completeSession(dto);
    }
};
__decorate([
    Get('questions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "getQuestions", null);
__decorate([
    Post('submit'),
    HttpCode(HttpStatus.OK),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof SubmitAnswerDto !== "undefined" && SubmitAnswerDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "submitAnswer", null);
__decorate([
    Post('complete'),
    HttpCode(HttpStatus.OK),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof CompleteQuizDto !== "undefined" && CompleteQuizDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "completeSession", null);
QuizController = __decorate([
    Controller('quiz'),
    __metadata("design:paramtypes", [typeof (_a = typeof QuizService !== "undefined" && QuizService) === "function" ? _a : Object])
], QuizController);
export { QuizController };
//# sourceMappingURL=quiz.controller.js.map