import './grid.scss';
import cn  from 'classnames';
interface IPropsGrid {
  artists: string[]
}

export const Grid = ({artists}:IPropsGrid) => {
  return (
    <div className={cn('grid')}>
        <div> 123 </div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>12333</div>
        <div>1412</div>
    </div>
  );
};
