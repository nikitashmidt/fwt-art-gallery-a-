import './Сard.scss';
import cn  from 'classnames';
import author from '../../resources/author.png';
import arrow from '../../resources/arrow.svg';

interface IPropsCard {
  name: string,
  thumbnail: string,
  dateFirst: number,
  dateSecond: number,
  onClick: () => void,
  isDark: boolean,
  size?: 'small' | 'medium' | 'large', 
}

export const Card = ({name, thumbnail, dateFirst, dateSecond, onClick, isDark, size}:IPropsCard) => {
  return (
    <li 
      className={cn('card', {'card-dark': isDark}, `card--${size}` )
    }>
        <img src={author} 
        className={cn("card-images")}
         alt="author icon"/>
        <div className={cn("card-block")}>
          <div className={cn("card-info")}>
              <span className={cn("card-name")}> {name} name </span>
              <time className={cn("card-date")}> {dateFirst} - {dateSecond} 123-123 </time>
            </div>
            <div className={cn("card-arrow")}>
                <img src={arrow} alt='arrow' />
            </div>
        </div>
    </li>
  );
};
