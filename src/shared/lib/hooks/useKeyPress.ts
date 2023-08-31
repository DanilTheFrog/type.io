import { useEffect, useState } from 'react';

export const useKeyPress = (keyTarget: string, isCaseSensitive = false) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleKeyDown = (e: KeyboardEvent) => {
        let key = e.key;
        if(!isCaseSensitive) key = key.toLowerCase();
        if (key === keyTarget) {
            setIsPressed(true);
        }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        let key = e.key;
        if(!isCaseSensitive) key = key.toLowerCase();
        if (key === keyTarget) {
            setIsPressed(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        }
    });

    return isPressed;
}