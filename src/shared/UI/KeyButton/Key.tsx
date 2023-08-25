
import { IKeyButtonProps } from "./Key.interface";
import style from "./KeyButton.module.css";

export const Key = ({label, inactive=false, isPressed=false}: IKeyButtonProps) => {



    let keyStyle = inactive ? `${style.key} ${style.inactive}` : `${style.key}`;
    if(!inactive && isPressed) keyStyle = `${keyStyle} ${style.pressed}`

    const view = (  <div className={keyStyle}>
                        <div>{label}</div>
                    </div>)
    
    return view;
}