import { useEventTimer } from "@/shared/api/useEventTimer";
import { useStatsStore } from "@/shared/api/useStatStore";
import { useEffect, useState } from "react";
import { TypeLineData } from "./api/TypeLineData";

interface Props {
    text: string;
    Component: React.ElementType;
}

export const TypeLineComponent = ({text, Component}:Props) => {
    const typeLineData = new TypeLineData(TypeLineData.textToTypeLineDTO(text));
    const [dto, setDto] = useState(typeLineData.getDTO());
    const [setAccuracy] = useStatsStore(
        (state) => [state.setAccuracy],
    )
    const [setSpeed] = useStatsStore(
        (state) => [state.setSpeed],
    )

    const [inputCount, setInputCount] = useState(1);
    const [correctCount, setCorrectCount] = useState(1);

    const {update, time} = useEventTimer();



    useEffect(() => {

        const inputHandler = (e: KeyboardEvent) => {
            if(e.key !== 'Shift' && e.key !== 'Alt') setInputCount(inputCount + 1);
            if(e.key === TypeLineData.getNext(dto)) {
                setDto(TypeLineData.applyInput(dto));
                setCorrectCount(correctCount + 1);
                update();
                setSpeed((Math.floor(inputCount / time) * 60));
            }
            const accuracy = +((correctCount * 100) / inputCount).toFixed(2);
            setAccuracy(accuracy);
        }

        window.addEventListener("keydown", inputHandler)

        return () => {
            window.removeEventListener("keydown", inputHandler);
        }
    }, [dto, inputCount, correctCount, time, setAccuracy, setSpeed, update]);


    return (<Component dto={dto}/>)
}