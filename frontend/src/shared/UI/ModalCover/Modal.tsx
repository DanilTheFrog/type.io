import style from "./Modal.module.css";

export const Modal = ({ModalContent} : {ModalContent: React.ReactElement}) => {


    return (
        <div className={style.cover}>
            <div className={style.modal}>
                {ModalContent}
            </div>
        </div>
    )
}