import { KeyPressableWithContext } from "@/entities/KeyPressable/KeyPressable"
import { TypeLineComponent } from "@/features/TypeLine/TypeLineComponent"
import { MaterialKeyButton } from "@/shared/UI/MaterialKeyButton"
import { MaterialTypeLine } from "@/shared/UI/TypeLine"

const textExample = `Штирлиц играл в карты и проигрался. Но Штирлиц умел делать хорошую мину при плохой игре. Когда Штирлиц покинул компанию, мина сработала. Идет Штирлиц ночью по городу, навстречу мужик бородатый и в чалме.- Будь он не Ладен - подумал Штирлиц. Штирлиц и Мюллер ездили по очереди на танке. Очередь редела, но не расходилась... Штирлиц стрелял вслепую. Слепая испугалась и побежала скачками, но качки быстро отстали. Подвыпившие Штирлиц и Мюллер вышли из бара.- Давайте снимем девочек, - предложил Штирлиц.`

export const TestingPage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{color: 'whitesmoke'}}>Тестирование</h1>

            <TypeLineComponent text={textExample} Component={MaterialTypeLine} />

            
            <KeyPressableWithContext color="purple" text="A" type="key" value="A" />
            <MaterialKeyButton inactive color="purple" text="A" type="key" value="A" />
            <KeyPressableWithContext color="black" text="space" type="space" value=" " />
            
            
        </div>
    )
}