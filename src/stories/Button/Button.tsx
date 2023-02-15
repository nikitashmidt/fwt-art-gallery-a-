import './button.scss';
import {ButtonTemplate as Btn}  from '../ButtonDefaultTemplate/ButtonDefault';

interface ButtonProps {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  isDark: boolean,
  isDisabled: boolean
}

export const Button =({
  backgroundColor,
  label,
  isDark,
  isDisabled,
}: ButtonProps) => {
  return (
    <Btn
      className={'button'} 
      label={label}
      backgroundColor={backgroundColor}
      isDark={isDark}
      isDisabled={isDisabled}
    >
    </Btn>
  );
};