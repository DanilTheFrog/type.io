import css from './Level.module.css';

interface Props {
    completed?: boolean;
    text: string;
    avaliable?: boolean;
}

export const Level = (props: Props) => {

    const starSrc = props.completed ? "images/star-completed.svg" : "images/star-uncompleted.svg";
    const rootclasses = `${css.root} ${props.avaliable ? css.avaliable : css.unavailable}`;

    return (
        <div className={rootclasses}>
            <div className={css.text}>{props.text}</div>
            <img className={css.star} src={starSrc}/>
        </div>
    )
}