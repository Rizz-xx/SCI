import { ProgressService } from './progress.service';
import { CreateSessionDto } from './dto/create-session.dto';
export declare class ProgressController {
    private readonly progressService;
    constructor(progressService: ProgressService);
    createSession(dto: CreateSessionDto): any;
    getSession(id: string): any;
    getHistory(): any;
}
