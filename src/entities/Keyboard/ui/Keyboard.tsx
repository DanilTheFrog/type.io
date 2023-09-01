import { KeyPressableWithContext } from '@/entities/KeyPressable/KeyPressable';
import { IMaterialKeyProps } from '@/shared/UI/MaterialKeyButton/Buttons';
import css from './Keyboard.module.css';


interface KeyboardProps {
    keyset: IMaterialKeyProps[][];
}


export const Keyboard = ({keyset} : KeyboardProps) => {

    return(
        <div className={css.keyboardLayout}>
            {keyset.map(keyRow => {
                return(
                    <div className={css.keyRow} key={keyRow[0].value}>
                        {keyRow.map(key => {
                            const {value} = key;
                            if (typeof value === 'string')
                            return (<KeyPressableWithContext  value={value} {...key} key={'button_'+key.value+"_"+key.type}/>)})}
                    </div>
                )
            })}
            <div className={css.keyRow}>
                <KeyPressableWithContext label='space' type='space' value=' ' key={'button_space'}/>
            </div>
        </div>
    )

}