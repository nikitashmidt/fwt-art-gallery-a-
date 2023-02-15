import './Forms.scss';
import cn  from 'classnames';


const FormSignUp = () => {
    return (
        <div>
            <form action="#" className={cn("form")}>
                <label htmlFor="email">Email</label>
                <input type="email" className={cn('form__email')}/>
                <label htmlFor="password">Password</label>
                <input type="password" className={cn('form__password')} />
                <button className={cn('form__button')}>Sign up</button>
            </form>
        </div>
    )
}
export default FormSignUp;