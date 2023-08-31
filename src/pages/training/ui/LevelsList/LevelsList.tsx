import { LevelGroup, LevelGroupProps } from '../LevelGroup/LevelGroup';
import css from './LevelsList.module.css';


export interface LevelListProps {
    levelGroups: LevelGroupProps[];
}


export const LevelsList = (props: LevelListProps) => {
    
    return (
        <div className={css.root}>
            {props.levelGroups.map(levelGroup => <LevelGroup key={levelGroup.title} {...levelGroup} />)}
        </div>
    )
}