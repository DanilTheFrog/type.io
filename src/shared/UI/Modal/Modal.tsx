import { MouseEventHandler } from 'react'
import css from './Modal.module.css'
import { useModal } from './useModal'


export const Modal = ({children} : {children: React.ReactElement}) => {
    const [close, isOpen] = useModal(state => [state.close, state.isOpen])

    const onClose: MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log(event)
        close();
    }

    return (
        <div className={css.root + ` ${!isOpen && css.hidden}`}>
            <div className={css.cover} onClick={onClose}></div>
            <div className={css.modal}>
                {children}
            </div>
        </div>
    )
}