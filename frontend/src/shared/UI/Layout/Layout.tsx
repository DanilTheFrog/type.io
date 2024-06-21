import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";


interface Props {
    headerSlot?: React.ReactNode;
    footerSlot?: React.ReactNode;
}
export const Layout = (props: Props) => {

    return (
        <div className={css.root}>
            {props.headerSlot}
            <div className={css.container}>
                <div className={css.content}>
                    <Outlet />
                </div>
            </div>
            {props.footerSlot}
        </div>
    )
}