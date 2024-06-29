import { PrismaClient } from "@prisma/client";
import LevelRepository from "../LevelsRepo";
import { TypingLevel } from "@/entities/types";

export default class LevelRepositoryPrisma implements LevelRepository{
    
    private _prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this._prisma = prisma;
    }
    async getById(id: number) {
        try {
            const level = await this._prisma.typingLevel.findUnique({
                where: {
                    id
                }
            })
            if (!level) return undefined;
            return level
        } catch(e: unknown) {
            return undefined
        }
    }
    async getAll() {
        try {
            const levels = await this._prisma.typingLevel.findMany();
            if (!levels) return undefined;
            return levels
        } catch (e: unknown) {
            console.log(e);
            return undefined
        }
    }
    
    async create(dto: Omit<TypingLevel, "createdAt" | "updatedAt" | "id">) {
        try {
            const level = await this._prisma.typingLevel.create({data: dto})
            if (!level) return undefined;
            return level;
        } catch (e: unknown) {
            console.log(e);
            return undefined
        }
    }

    async update(id: number, dto: Omit<TypingLevel, "createdAt" | "updatedAt" | "id">) {
        try {
            const level = await this._prisma.typingLevel.update({where: {id}, data: dto})
            if (!level) return undefined;
            return level;
        } catch (e: unknown) {
            console.log(e);
            return undefined
        }
    }

    async count() {
        try {
            const count = await this._prisma.typingLevel.count();
            if (!count) return undefined
            return count;
        } catch (e: unknown) {
            return undefined;
        }
    }

    async delete(id: number)  {
        try {
            const levelDeleted = await this._prisma.typingLevel.delete({where:{id}})
            if(!levelDeleted) return undefined;

            return levelDeleted;
        } catch (e: unknown) {
            console.log(e);
            return undefined;
        }

    }


}