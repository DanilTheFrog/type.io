
interface Props {
    github?: boolean;
    google?: boolean;
    facebook?: boolean;
}


export const OAuth: React.FC<Props> = (props) => {
    const viaGoogle = (
        <div>Google</div>
    )

    const viaGithub = (
        <div>Github</div>
    )

    return(
        <div>
            {props.google && viaGoogle}
            {props.github && viaGithub}
        </div>
    )
}