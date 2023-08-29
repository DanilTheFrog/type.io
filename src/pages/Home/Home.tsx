import { LayoutUserCard } from "@/widgets/LayoutUserCard/ui/LayoutUserCard"
import { LayoutHeader } from "@/widgets/Layoutheader/ui/LayoutHeader/LayoutHeader"
import { TrainingComponent } from "@/widgets/TypeTraining/TrainingComponent"




export const Home = () => {




    return (<div style={{display: "block", gap: "1rem"}}>
        <LayoutHeader rightContentSlot={<LayoutUserCard name={"Хуй Моржовый"}/>}/>
        <TrainingComponent text="try to type it "/>
        {/* <Modal ModalContent={<p>this is modal</p>}/> */}
    </div>)
}