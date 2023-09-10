import { Keyboard } from "@/entities/Keyboard"
import { EnUsKeys } from "@/entities/Keyboard/ui/IKeyboardSettings"
import { Auth } from "@/features/Auth"
import { TypeLineComponent } from "@/features/TypeLine/TypeLineComponent"
import { Modal } from "@/shared/UI/Modal/Modal"
import { MaterialTypeLine } from "@/shared/UI/TypeLine"
import { Layout } from "../Layout/Layout"
import { RightStat } from "../RightStat/RightStat"

const textExample = `Штирлиц играл в карты и проигрался. Но Штирлиц умел делать хорошую мину при плохой игре. Когда Штирлиц покинул компанию, мина сработала. Идет Штирлиц ночью по городу, навстречу мужик бородатый и в чалме.- Будь он не Ладен - подумал Штирлиц. Штирлиц и Мюллер ездили по очереди на танке. Очередь редела, но не расходилась... Штирлиц стрелял вслепую. Слепая испугалась и побежала скачками, но качки быстро отстали. Подвыпившие Штирлиц и Мюллер вышли из бара.- Давайте снимем девочек, - предложил Штирлиц.`

export const TestingPage = () => {
    return (
        <div>
            
            <Layout keyboardSlot={<Keyboard keyset={EnUsKeys}/>}
            typeElementSlot={<TypeLineComponent text={textExample} Component={MaterialTypeLine} />}
            rightSlot={<RightStat/>}
            />
            
            <Modal>
                <Auth />
            </Modal>
        </div>
    )
}