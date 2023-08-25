import { useEffect, useState } from 'react';
import style from './TypeLine.module.css';
import { ITypeLineDTO } from './TypeLineDTO';


export const TypeLine = ({dto}: {dto: ITypeLineDTO}) => {
    
    const [isHidden, setIsHidden] = useState(false);


    useEffect(() => {
        const i = setInterval(() => {
            setIsHidden(!isHidden);
        }, 400);

        return () => {
            clearInterval(i)
        }
    });


    return (
        <div className={style.typeLine}>
            <div className={style.prev}>
                {dto.prev}
            </div>

            <div className={`${style.cursor} ${isHidden? style.hidden : ""}`}></div>

            <div className={style.next}>
                {dto.next}
            </div>
        </div>
    )
}