import TypeLine from "@/shared/UI/TypeLine";
import { useEffect, useState } from "react";
import { TypeLineData } from "./api/TypeLineData";

export const TypeLineComponent = ({text}: {text:string}) => {
    const typeLineData = new TypeLineData(TypeLineData.textToTypeLineDTO(text));
    const [dto, setDto] = useState(typeLineData.getDTO());


    useEffect(() => {

        const inputHandler = (e: KeyboardEvent) => {
            console.log(e.key);
            console.log(dto);
            if(e.key === TypeLineData.getNext(dto)) {
    
                setDto(TypeLineData.applyInput(dto));
            }
        }

        window.addEventListener("keydown", inputHandler)

        return () => {
            window.removeEventListener("keydown", inputHandler);
        }
    }, [dto]);


    return (<TypeLine dto={dto}/>)
}