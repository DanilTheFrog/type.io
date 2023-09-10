import css from './Layout.module.css';

interface Props {
    typeElementSlot: React.ReactNode;
    keyboardSlot: React.ReactNode;
    rightSlot: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {

    return(
        <div className={css.root}>
            <div className={css.content}>
                <div>{props.typeElementSlot}</div>
                <div className={css.keyboardSlot}>{props.keyboardSlot}</div>
            </div>
            <div className={css.rightSlot}>
                {props.rightSlot}
            </div>
        </div>
    )
}