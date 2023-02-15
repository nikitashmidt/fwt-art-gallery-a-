import author from '../../resources/author.png';
import arrow from '../../resources/arrow.svg';
import './Content.scss';
import { Link } from 'react-router-dom';    
import cn from 'classnames';

const Content = () => {
    return(
        <div className={cn("content")}>
            <ul className={cn("content-items")}>
                <li className={cn('content-item')}>
                    <Link to='/author'>
                        <img src={author} className={cn("content-item__images")} alt="author icon" width={'100%'} height={'100%'} />
                    </Link>
                    <div className={cn("content-item__block")}>
                        <div className={cn("content-item__info")}>
                            <span className={cn("content-item__author")}>Jean-Honore Fragonard</span>
                            <time className={cn("content-item__data")}>1732 - 1806</time>
                        </div>
                        <div className={cn("content-item__arrow")}>
                            <img src={arrow} alt='arrow' />
                        </div>
                    </div>
                </li>
                <li className={cn('content-item')}>
                    <Link to='/author'>
                        <img src={author} className={cn("content-item__images")} alt="author icon" width={'100%'} height={'100%'} />
                    </Link>
                    <div className={cn("content-item__block")}>
                        <div className={cn("content-item__info")}>
                            <span className={cn("content-item__author")}>Jean-Honore Fragonard</span>
                            <time className={cn("content-item__data")}>1732 - 1806</time>
                        </div>
                        <div className={cn("content-item__arrow")}>
                            <img src={arrow} alt='arrow' />
                        </div>
                    </div>
                </li>
                <li className={cn('content-item')}>
                    <Link to='/author'>
                        <img src={author} className={cn("content-item__images")} alt="author icon" width={'100%'} height={'100%'} />
                    </Link>
                    <div className={cn("content-item__block")}>
                        <div className={cn("content-item__info")}>
                            <span className={cn("content-item__author")}>Jean-Honore Fragonard</span>
                            <time className={cn("content-item__data")}>1732 - 1806</time>
                        </div>
                        <div className={cn("content-item__arrow")}>
                            <img src={arrow} alt='arrow' />
                        </div>
                    </div>
                </li>
                <li className={cn('content-item')}>
                    <Link to='/author'>
                        <img src={author} className={cn("content-item__images")} alt="author icon" width={'100%'} height={'100%'} />
                    </Link>
                    <div className={cn("content-item__block")}>
                        <div className={cn("content-item__info")}>
                            <span className={cn("content-item__author")}>Jean-Honore Fragonard</span>
                            <time className={cn("content-item__data")}>1732 - 1806</time>
                        </div>
                        <div className={cn("content-item__arrow")}>
                            <img src={arrow} alt='arrow' />
                        </div>
                    </div>
                </li>
                <li className={cn('content-item')}>
                    <Link to='/author'>
                        <img src={author} className={cn("content-item__images")} alt="author icon" width={'100%'} height={'100%'} />
                    </Link>
                    <div className={cn("content-item__block")}>
                        <div className={cn("content-item__info")}>
                            <span className={cn("content-item__author")}>Jean-Honore Fragonard</span>
                            <time className={cn("content-item__data")}>1732 - 1806</time>
                        </div>
                        <div className={cn("content-item__arrow")}>
                            <img src={arrow} alt='arrow' />
                        </div>
                    </div>
                </li>
                <li className={cn('content-item')}>
                    <Link to='/author'>
                        <img src={author} className={cn("content-item__images")} alt="author icon" width={'100%'} height={'100%'} />
                    </Link>
                    <div className={cn("content-item__block")}>
                        <div className={cn("content-item__info")}>
                            <span className={cn("content-item__author")}>Jean-Honore Fragonard</span>
                            <time className={cn("content-item__data")}>1732 - 1806</time>
                        </div>
                        <div className={cn("content-item__arrow")}>
                            <img src={arrow} alt='arrow' />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Content;