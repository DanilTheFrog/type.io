import { KeyPressableWithContext } from "@/entities/KeyPressable/KeyPressable";
import Keyboard from "@/entities/Keyboard";
import { TypeLineComponent } from "@/features/TypeLine/TypeLineComponent";
import { EnKeys } from "@/shared/model/collections/Keysets";
import { FC } from "react";

interface TrainingComponentProps {
    text: string;
}

export const TrainingComponent: FC<TrainingComponentProps> = ({text}): JSX.Element => {


    return (
        <div>
            
            <TypeLineComponent text={text}/>
            <Keyboard keyset={EnKeys} KeyComponent={KeyPressableWithContext}/>
        </div>
    )
}