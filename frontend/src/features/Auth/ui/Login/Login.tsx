import { SubmitHandler, useForm } from 'react-hook-form';
import css from '../style.module.css';

type Inputs = {
    name: string
    email: string
}

export const Login: React.FC = () => {
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



            <input type='submit'/>
        </form>
    )
}