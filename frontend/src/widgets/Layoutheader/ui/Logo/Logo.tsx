import { Link } from "react-router-dom"
import style from "./Logo.module.css"
import logo from './logo.svg'
export const Logo = () => {
    return(
        <Link to={"/"}>
            <img className={style.root} src={logo}/>
        </Link>
    )
}