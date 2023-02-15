import useTheme from '../../hooks/useTheme';
import cn from 'classnames';
import './Layout.scss';


const Layout = ({ children }: {children: React.ReactNode}) => {
    const { isDark } = useTheme();
    return (
        <div className={cn('layout', {
            dark: isDark,
        })}  >{children}</div>
    );
};

export default Layout;