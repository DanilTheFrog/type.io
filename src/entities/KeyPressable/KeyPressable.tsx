import { MaterialKeyButton } from "@/shared/UI/MaterialKeyButton";
import { IMeterialKeyProps } from "@/shared/UI/MaterialKeyButton/Buttons";
import { useKeyPress } from "@/shared/lib/hooks/useKeyPress";



interface IKeyPressableProps {
    value: string;
}

export const KeyPressableWithContext = ({ value, ...props }: IMeterialKeyProps & IKeyPressableProps) => {
    const isPressed = useKeyPress(value.toLowerCase());

    
    return <MaterialKeyButton {...props} isPressed={isPressed} />;
}