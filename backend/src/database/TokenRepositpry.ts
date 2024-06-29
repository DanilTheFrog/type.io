import { Token } from "@/entities/types";


export interface TokenRepository {

    create(dto: Token): Promise<Token | null>
    findAllUserTokens(userId: number): Promise<Token[] | null>
    findTokenById(id: string): Promise<Token | null>
    findToken(token: string): Promise<Token | null>
    deleteExpiredTokens(): Promise<Token[] | null>
}