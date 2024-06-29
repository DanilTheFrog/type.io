import { Token } from "@/entities/types";
import { TokenRepository } from "../TokenRepositpry";
import { PrismaClient } from "@prisma/client";
import { Logger } from "@/types/Logger";

export class TokenRepositoryPrisma  implements TokenRepository{
    private _prisma: PrismaClient;
    private logger: Logger

    constructor(prismaClient: PrismaClient, logger: Logger = console) {
        this._prisma = prismaClient
        this.logger = logger
    }


    public async create(dto: Token): Promise<Token | null> {
        try {
            const token: unknown = await this._prisma.token.create({data:dto});
            if(!token) return null
            return token as Token
        } catch (error) {
            this.logger.log(error);
            return null
        }
    }
    async findAllUserTokens(userId: number): Promise<Token[] | null> {
        try {
            const tokens: unknown[] = await this._prisma.token.findMany({where: {userId}})
            if(!tokens) return null;
            return tokens as Token[]
        } catch (error) {
            this.logger.log(error);
            return null;
        }
    }
    findTokenById(id: string): Promise<Token | null> {
        throw new Error("Method not implemented.");
    }
    deleteExpiredTokens(): Promise<Token[] | null> {
        throw new Error("Method not implemented.");
    }
    async findToken(refreshToken: string): Promise<Token | null> {
        try {
            const token: unknown = await this._prisma.token.findFirst({where: {refreshToken}})
            if(!token) return null

            return token as Token
        } catch (error) {
            this.logger.log(error);
            return null
        }
    }
    
}