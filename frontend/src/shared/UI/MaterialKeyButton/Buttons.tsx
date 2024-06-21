import css from './Buttons.module.css';

type KeyType = 'tab' | 'enter' | 'leftShift' | 'rightShift' | 'backspace' | 'space' | 'key' | 'caps';

export interface IMaterialKeyProps {
    label: string;
    textAlign?: 'left' | 'center' | 'right';
    value?: string;
    color?: 'black' | 'purple';
    type?: KeyType;
    isPressed?: boolean;
    inactive?: boolean;
}

export const MaterialKeyButton:React.FC<IMaterialKeyProps> = (props: IMaterialKeyProps): JSX.Element => {
    const color = props.color === 'black' ? 'black' : 'purple';
    const rootClasses = `${css.root} ${css[color]} ${props.inactive && css.inactive} ${props.isPressed && css["pressed_"+color]}`;
    const sizeClasses = `${css[props.type ? props.type : 'key']} ${props.textAlign ? css[props.textAlign] : css.center}`;

    return (
        <div className={`${rootClasses} ${sizeClasses}`}>
            <div>
                {props.label}
            </div>
        </div>
    )
}
