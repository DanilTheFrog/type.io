type ICONS = 'profile';
import css from './Icon.module.css';
import profileImg from './profile.svg';

interface Props {
    type: ICONS
}

const profile = (
    <div>
        <img className={css.profile} src={profileImg} alt="profile" />
    </div>
)

export const Icon = (props: Props) => {
    
    let element = <span>none</span>;

    if(props.type === 'profile') {
        element = profile;
    }

    return element;
}