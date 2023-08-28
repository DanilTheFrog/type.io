import { LayoutHeader } from "@/widgets/Layoutheader"

export const TrainingPage = () => {

    return(
        <div>
            <LayoutHeader rightContentSlot={<p>Hello friend</p>}/>
            <h1>Тренажер</h1>
        </div>
    )
}