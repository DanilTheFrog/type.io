import { testLevelList } from "../../model/testLevelList"
import { LevelsList } from "../LevelsList/LevelsList"
import css from './Page.module.css'


export const TrainingPage = () => {

    return(
        <div className={css.root}>
            <h2 className={css.header}>Выбери уровень сложности</h2>
            <LevelsList levelGroups={testLevelList} />
        </div>
    )
}