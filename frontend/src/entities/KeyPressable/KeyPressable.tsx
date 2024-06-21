import { MaterialKeyButton } from "@/shared/UI/MaterialKeyButton";
import { IMaterialKeyProps } from "@/shared/UI/MaterialKeyButton/Buttons";
import { useKeyPress } from "@/shared/lib/hooks/useKeyPress";




interface Props extends IMaterialKeyProps {
    value: string;
}


export const KeyPressableWithContext = ({ value, ...props }: Props) => {
    const isPressed = useKeyPress(value.toLowerCase());
    if(!value) return <div>invalidProps</div>

    
    return <MaterialKeyButton {...props} isPressed={isPressed} />;
}