import Key from "@/shared/UI/KeyButton";
import { useKeyPress } from "@/shared/lib/hooks/useKeyPress";
import { IKeyPressableProps } from "./KeyPressable.interface";


export const KeyPressableWithContext = ({label, value}: IKeyPressableProps) => {
    const isPressed = useKeyPress(value.toLowerCase());
    return <Key label={label} isPressed={isPressed}/>
}