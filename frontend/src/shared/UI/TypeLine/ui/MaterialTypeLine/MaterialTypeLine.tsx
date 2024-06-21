import { ITypeLineDTO } from "../../TypeLineDTO";
import css from './MaterialTypeLine.module.css';

export const MaterialTypeLine: React.FC<{dto: ITypeLineDTO}> = ({dto}: {dto: ITypeLineDTO}) => {

    return(
            <div className={css.root}>
                <span className={css.prev}>
                    {dto.prev}
                </span>
                <span className={css.next}>
                    {dto.next}
                </span>
            </div>
    )
}