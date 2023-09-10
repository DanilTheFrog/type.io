import { SubmitHandler, useForm } from 'react-hook-form';
import css from '../style.module.css';

type Inputs = {
    name: string
    email: string
    password: string
    repeatPassword: string
}

export const Register: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("Отправляю данные: ");
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={css.root}>

            <div className={css.item}>
                <div className={css.label}>
                    Имя
                    {errors.name && <span className={css.warning}>This field is required</span>}
                </div>
                <input {...register("name", {required: true})}/>
            </div>

            <div className={css.item}>
                <div className={css.label}>
                    Адрес электронной почты
                    {errors.email && <span className={css.warning}>This field is required</span>}
                </div>
                <input {...register("email", {required: true})}/>
            </div>

            <div className={css.item}>
                <div className={css.label}>
                    Имя
                    {errors.password && <span className={css.warning}>This field is required</span>}
                </div>
                <input {...register("password", {required: true})} type='password'/>
            </div>

            <div className={css.item}>
                <div className={css.label}>
                    Имя
                    {errors.repeatPassword && <span className={css.warning}>This field is required</span>}
                </div>
                <input {...register("repeatPassword", {required: true})} type='password'/>
            </div>


            <input type='submit'/>
        </form>
    )
}