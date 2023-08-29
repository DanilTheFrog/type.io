import { useEffect, useState } from 'react';

export const useKeyPress = (keyTarget: string) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === keyTarget) {
            setIsPressed(true);
        }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === keyTarget) {
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