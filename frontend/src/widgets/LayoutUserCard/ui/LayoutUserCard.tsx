import { Icon } from "@/shared/UI/Icon";
import css from './LayoutUserCard.module.css';


interface Props {
    name: string;
}

export const LayoutUserCard = (props: Props) => {
    
    return(
        <div className={css.root}>
            <div className={css.name}>{props.name}</div>
            <Icon type="profile" />
        </div>
    )
}