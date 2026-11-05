import { PrismaService } from '../prisma/prisma.service';
import { CreateSessionDto } from './dto/create-session.dto';
export declare class ProgressService {
    private prisma;
    constructor(prisma: PrismaService);
    createSession(dto: CreateSessionDto): Promise<{
        sessionId: any;
    }>;
    getSession(id: string): Promise<any>;
    getHistory(): Promise<any>;
}
