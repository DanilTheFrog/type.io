import { Timestamp, TypingLevel } from "@/entities/types"


type T = (TypingLevel & Timestamp)
type N = null | undefined
interface LevelRepository {
    getById(id: number): Promise<T | N>
    getAll(): Promise<T[] | N>
    create(dto: Omit<TypingLevel, "createdAt" | "updatedAt" | "id">): Promise<T | N>
    delete(id: number): Promise<T | N>
    count(): Promise<number | null | undefined>
}


export default LevelRepository;