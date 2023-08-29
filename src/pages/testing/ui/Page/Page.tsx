import { Level } from "@/shared/UI/Level/Level"

export const TestingPage = () => {
    return (
        <div>
            <h1>Тестирование</h1>
            <Level avaliable completed text="Уровень 1" />
            <Level avaliable text="Уровень 2" />
            <Level text="Уровень 3" />
        </div>
    )
}