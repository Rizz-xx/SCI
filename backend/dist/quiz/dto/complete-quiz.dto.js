var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsArray, IsBoolean, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
class AnswerItem {
    questionId;
    selectedOptionId;
    isCorrect;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], AnswerItem.prototype, "questionId", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AnswerItem.prototype, "selectedOptionId", void 0);
__decorate([
    IsBoolean(),
    __metadata("design:type", Boolean)
], AnswerItem.prototype, "isCorrect", void 0);
export class CompleteQuizDto {
    sessionId;
    answers;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CompleteQuizDto.prototype, "sessionId", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => AnswerItem),
    __metadata("design:type", Array)
], CompleteQuizDto.prototype, "answers", void 0);
//# sourceMappingURL=complete-quiz.dto.js.map