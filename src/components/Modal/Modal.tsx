import loginImage from '../../resources/login-image.png';
import signupImage from '../../resources/signup-image.png';
import './Modal.scss';
import cn  from 'classnames';
import { IPropsModal } from '../types/types';
import {FormLogin, FormSignUp} from '../Forms/';


const Modal = ({openModalProp, setOpenModalProp, value, setValue}: IPropsModal) => {
    return(
        <>
            <div className={cn('modal', {'modal-active': !openModalProp})}>
                {value === 'login' ? 
                    <img src={loginImage} alt="login-image" className='login-image' /> :
                    <img src={signupImage} alt="signup-image" className='signup-image' /> 
                }
                <div className={cn('modal-right')}>
                    <div className={cn('modal-close')} onClick={() => setOpenModalProp()} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.386207 14.8252C0.165517 15.049 0.165517 15.3846 0.386207 15.6084C0.606897 15.8322 0.937931 15.8322 1.15862 15.6084L7.88966 8.8951L14.731 15.8322C14.9517 16.0559 15.2828 16.0559 15.5034 15.8322C15.7241 15.6084 15.7241 15.2727 15.5034 15.049L8.66207 8.11189L15.8345 0.951049C16.0552 0.727273 16.0552 0.391608 15.8345 0.167832C15.6138 -0.0559441 15.2828 -0.0559441 15.0621 0.167832L7.88966 7.32867L0.937931 0.27972C0.717241 0.0559441 0.386207 0.0559441 0.165517 0.27972C-0.0551724 0.503497 -0.0551724 0.839161 0.165517 1.06294L7.22759 8.11189L0.386207 14.8252Z" fill="#575757"/>
                        </svg>
                    </div>
                    <h3 className={cn('modal-title')}> {value === 'login' ? 'Welcome back' : 'Create your profile' } </h3>
                    { value === 'login' ?
                        <p className={cn('modal-description')}>
                            If you don't have an account yet, please <a href='#' onClick={() => console.log('sad')}>  sign up</a> 
                        </p> :
                        <p className={cn('modal-description')}>
                            If you already have an account, please <a href='#'>  log in</a> 
                        </p>
                    }
                    {value === 'login' ? <FormLogin/> : <FormSignUp/>}
                </div>
            </div>
            <div className={cn('modal-overlay', {noactive: openModalProp})} onClick={() => setOpenModalProp()}></div>
        </>
    )
}


export default Modal;