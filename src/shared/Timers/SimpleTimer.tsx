import { ITimerUIProps } from "./Timer.interface";
import style from './Timer.module.scss';


export const SimpleTimer = ({s, m, ms}: ITimerUIProps) => {
    return (
        <div className={style.simpleTimer}>
            <pre>{m}</pre>
            <div>:</div>
            <pre>{s}</pre>
            <div>:</div>
            <pre>{ms}</pre>
        </div>
    )
}