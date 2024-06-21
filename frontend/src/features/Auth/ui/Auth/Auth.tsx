
import { useModal } from '@/shared/UI/Modal/useModal';
import { useState } from 'react';
import { Login } from '../Login/Login';
import { OAuth } from '../OAuth/OAuth';
import { Register } from '../Register/Register';
import css from './Auth.module.css';

type AuthTabs = 'Login' | 'Register';

export const Auth: React.FC = () => {

    const [tab, setTab] = useState<AuthTabs>('Register')
    const [close] = useModal(state => [state.close]);

    const onClose = () => {

        close()
    }

    return(
        <div className={css.root}>
            <div className={css.header}>

                {                
                tab === 'Register' ? (<button className={css.button} onClick={()=>setTab('Login')}>
                    <img src={'images/modal-arrow.svg'} alt='back'/>
                </button>) : <div></div>
                }

                <button className={css.button} onClick={onClose}>
                    <img src={'images/modal-close.svg'} alt='close' />
                </button>
            </div>

            <div className={css.content}>
                {tab === 'Login' && <Login />}
                {tab === 'Register' && <Register />}

                <OAuth google github />
            </div>
        </div>
    )
}