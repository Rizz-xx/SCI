import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateSessionDto } from './dto/create-session.dto';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post('session')
  createSession(@Body() dto: CreateSessionDto) {
    return this.progressService.createSession(dto);
  }

  @Get('session/:id')
  getSession(@Param('id') id: string) {
    return this.progressService.getSession(id);
  }

  @Get('history')
  getHistory() {
    return this.progressService.getHistory();
  }
}
