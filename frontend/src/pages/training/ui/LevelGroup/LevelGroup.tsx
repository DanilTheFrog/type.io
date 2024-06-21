import { Level } from '@/shared/UI/Level/Level';
import { LevelPrevievData } from '../../types/types';
import css from './LevelGroup.module.css';

export interface LevelGroupProps {
    title: string;
    levels: LevelPrevievData[];
}

export const LevelGroup = (props: LevelGroupProps) => {
    
    return (
        <div className={css.root}>
            <h2 className={css.header}>{props.title}</h2>
            <div className={css.levels}>
                {props.levels.map(level => <Level key={level.text} {...level} />)}
            </div>
        </div>
    )
}