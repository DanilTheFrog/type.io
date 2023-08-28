import { LayoutHeader } from "@/widgets/Layoutheader/ui/LayoutHeader/LayoutHeader"
import { TrainingComponent } from "@/widgets/TypeTraining/TrainingComponent"




export const Home = () => {




    return (<div style={{display: "block", gap: "1rem"}}>
        <LayoutHeader rightContentSlot={<p>this is header</p>}/>
        <TrainingComponent text="try to type it "/>
        {/* <Modal ModalContent={<p>this is modal</p>}/> */}
    </div>)
}