

import { useStatsStore } from '@/shared/api/useStatStore';
import css from './RightStat.module.css';


export const RightStat: React.FC = () => {

    const [accuracy] = useStatsStore(state => [state.accuracy])
    const [speed] = useStatsStore(state => [state.speed])

    return(
        <div className={css.root}>
            <div className={css.wrapper}>
                <div className={css.accuracy}>{speed} зн/мин</div>
                <div className={css.speed}>{accuracy} %</div>
            </div>
        </div>
    )
}