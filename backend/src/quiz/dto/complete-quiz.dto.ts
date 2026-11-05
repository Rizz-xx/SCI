import { IsString, IsArray, IsBoolean, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AnswerItem {
  @IsString() questionId: string;
  @IsString() selectedOptionId: string;
  @IsBoolean() isCorrect: boolean;
}

export class CompleteQuizDto {
  @IsString()
  @IsNotEmpty()
  sessionId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerItem)
  answers: AnswerItem[];
}
