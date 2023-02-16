import './Links.scss';
import cn  from 'classnames';
import { AnchorHTMLAttributes } from 'react';

interface ILinksProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: string,
    isDark: boolean,
}

const Links = ({children, isDark, ...props }: ILinksProps) => {
    return(
        <a href="#" className={cn('links', {'links--dark': isDark})}>
            {children}
        </a>
    )
}

export default Links;