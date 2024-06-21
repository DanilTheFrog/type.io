import { useEffect, useRef, useState } from "react";


// todo: Сделать таймер, основанный на сравнении дат;
// метод update должен вызываться извне для обновления состояния таймера;


export const useEventTimer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const firstCall = useRef(0);

    
    const update = () => {
        if(!isRunning) {
            setIsRunning(true);
            firstCall.current = Date.now();
        }
        setTime(Math.floor((Date.now() - firstCall.current) / 1000));
    }
    
    useEffect(() => {

    }, [])

    return {
        time, update
    }
}