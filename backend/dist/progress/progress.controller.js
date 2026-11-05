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
var _a, _b;
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateSessionDto } from './dto/create-session.dto';
let ProgressController = class ProgressController {
    progressService;
    constructor(progressService) {
        this.progressService = progressService;
    }
    createSession(dto) {
        return this.progressService.createSession(dto);
    }
    getSession(id) {
        return this.progressService.getSession(id);
    }
    getHistory() {
        return this.progressService.getHistory();
    }
};
__decorate([
    Post('session'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof CreateSessionDto !== "undefined" && CreateSessionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "createSession", null);
__decorate([
    Get('session/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getSession", null);
__decorate([
    Get('history'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProgressController.prototype, "getHistory", null);
ProgressController = __decorate([
    Controller('progress'),
    __metadata("design:paramtypes", [typeof (_a = typeof ProgressService !== "undefined" && ProgressService) === "function" ? _a : Object])
], ProgressController);
export { ProgressController };
//# sourceMappingURL=progress.controller.js.map