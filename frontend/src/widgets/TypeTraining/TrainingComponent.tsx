// import Keyboard from "@/entities/Keyboard";
import { FC } from "react";

interface TrainingComponentProps {
    text: string;
}

export const TrainingComponent: FC<TrainingComponentProps> = ({text}): JSX.Element => {


    return (
        <div>
            {text}
            {/* <TypeLineComponent text={text}/> */}
            {/* <Keyboard keyset={EnKeys} KeyComponent={KeyPressableWithContext}/> */}
        </div>
    )
}