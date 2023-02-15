import './btn.scss';


interface ButtonTemplateProps{
  className: string[],
  title: string,
  backgroundColor?: string,
}

export const ButtonTemplate = ({className, title, backgroundColor}:ButtonTemplateProps) => {
  return (
    <button
      type="button"
      className={className.join('  ')}
    >
      {title}
    </button>
  );
};
