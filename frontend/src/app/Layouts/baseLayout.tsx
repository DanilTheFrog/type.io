import { Layout } from "@/shared/UI/Layout/Layout"
import { LayoutUserCard } from "@/widgets/LayoutUserCard"
import { LayoutHeader } from "@/widgets/Layoutheader"

export const baseLayout = (
        <Layout 
        headerSlot={<LayoutHeader rightContentSlot={<LayoutUserCard name="Хуй Моржовый"/>}/>}
        />
    )