import { useKeyPress } from '@/shared/hooks/useKeyPress';
import { IKeyButtonProps } from "./Key.interface";
import style from "./KeyButton.module.css";

export const Key = ({label, inactive=false}: IKeyButtonProps) => {

    const isPressed = useKeyPress(label.toLowerCase());



    let keyStyle = inactive ? `${style.key} ${style.inactive}` : `${style.key}`;
    if(!inactive && isPressed) keyStyle = `${keyStyle} ${style.pressed}`

    const view = (  <div className={keyStyle}>
                        <div>{label}</div>
                    </div>)
    
    return view;
}