import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';


export const Navigation = () => {
    const classes = (isActive: boolean) => `${css.link} ${isActive ? css.active : ''}`;
    

    return(
        <div className={css.root}>
            <NavLink to={"/training"}
            className={({isActive}) => classes(isActive)}>Тренажер</NavLink>


            <NavLink to={"/testing"}
            className={({isActive}) => classes(isActive)}>Тестирование</NavLink>
        </div>
    )
}