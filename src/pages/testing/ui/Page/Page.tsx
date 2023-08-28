import { LayoutHeader } from "@/widgets/Layoutheader"

export const TestingPage = () => {
    return (
        <div>
            <LayoutHeader rightContentSlot={<p>Здарова</p>}/>
            <h1>Тестирование</h1>
        </div>
    )
}