import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { SubmitAnswerDto } from './dto/submit-answer.dto';
import { CompleteQuizDto } from './dto/complete-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('questions')
  getQuestions() {
    return this.quizService.getQuestions();
  }

  @Post('submit')
  @HttpCode(HttpStatus.OK)
  submitAnswer(@Body() dto: SubmitAnswerDto) {
    return this.quizService.submitAnswer(dto);
  }

  @Post('complete')
  @HttpCode(HttpStatus.OK)
  completeSession(@Body() dto: CompleteQuizDto) {
    return this.quizService.completeSession(dto);
  }
}
