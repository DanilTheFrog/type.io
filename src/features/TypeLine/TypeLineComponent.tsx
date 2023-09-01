import { useEffect, useState } from "react";
import { TypeLineData } from "./api/TypeLineData";

interface Props {
    text: string;
    Component: React.ElementType;
}

export const TypeLineComponent = ({text, Component}:Props) => {
    const typeLineData = new TypeLineData(TypeLineData.textToTypeLineDTO(text));
    const [dto, setDto] = useState(typeLineData.getDTO());

    useEffect(() => {

        const inputHandler = (e: KeyboardEvent) => {
            if(e.key === TypeLineData.getNext(dto)) {
    
                setDto(TypeLineData.applyInput(dto));
            }
        }

        window.addEventListener("keydown", inputHandler)

        return () => {
            window.removeEventListener("keydown", inputHandler);
        }
    }, [dto]);


    return (<Component dto={dto}/>)
}