import css from './Buttons.module.css';

type KeyType = 'tab' | 'enter' | 'leftShift' | 'rightShift' | 'backspace' | 'space' | 'key';

export interface IMeterialKeyProps {
    text: string;
    textAlign?: 'left' | 'center' | 'right';
    value?: string;
    color: 'black' | 'purple';
    type: KeyType;
    isPressed?: boolean;
    inactive?: boolean;
}

export const MaterialKeyButton:React.FC<IMeterialKeyProps> = (props: IMeterialKeyProps): JSX.Element => {

    const rootClasses = `${css.root} ${props.color === 'black' ? css.black : css.purple} ${props.inactive ? css.inactive : ''} ${props.isPressed ? css["pressed_"+props.color] : ''}`;
    const sizeClasses = `${css[props.type]} ${props.textAlign ? css[props.textAlign] : css.center}`;

    return (
        <div className={`${rootClasses} ${sizeClasses}`}>
            <div>
                {props.text}
            </div>
        </div>
    )
}
