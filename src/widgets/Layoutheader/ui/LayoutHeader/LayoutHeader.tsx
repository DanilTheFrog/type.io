import { ReactNode } from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import css from './LayoutHeader.module.css';

interface Props {
    rightContentSlot: ReactNode;
}

export const LayoutHeader = (props: Props) => {
    return(
    <div className={css.root}>
        <Logo />

        <Navigation />

        <div className={css.rightSide}>
            {props.rightContentSlot}
        </div>
        
    </div>)
}