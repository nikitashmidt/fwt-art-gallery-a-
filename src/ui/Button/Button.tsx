import cn  from 'classnames'
import './Button.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    isDark: boolean,
    isFilled: boolean,
    isOutlined?: boolean,
    isDisabled: boolean,
    children: React.ReactNode,
    className: string,
}

export const Button = ({onClick, isDark, isOutlined, children, isFilled, isDisabled, className, ...other}:IButtonProps) => {
    return(
        <button 
            className={cn(className, 'button',
                {'button--dark' : isDark}, 
                {'button--filled':isFilled},
                {'button--outlined': isOutlined},
                {'button--disabled': isDisabled}
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

