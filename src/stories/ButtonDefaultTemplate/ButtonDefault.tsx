import './buttonDefault.scss';

interface ButtonTemplateProps{
  className: string,
  label: string,
  backgroundColor?: string,
  children?: string[],
  isDark?: boolean,
  isDisabled: boolean,
}

export const ButtonTemplate = ({className, label, backgroundColor, isDark,isDisabled }:ButtonTemplateProps) => {
  const dark = isDark && `${className}--dark`;
  const disabled = isDisabled && `${className}--disabled`;
  return (
    <button
      type="button"
      className={[className, dark, disabled].join(' ')}
      style={{backgroundColor}}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
