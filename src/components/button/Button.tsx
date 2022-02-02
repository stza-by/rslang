import React, { ReactNode } from 'react';
import style from './Button.module.css';

export type ButtonProp = {
  children?: ReactNode;
  disabled?: boolean;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, disabled, id, onClick }: ButtonProp) => (
  <button className={style.btn} type='button' disabled={disabled} id={id} onClick={onClick}>
    {children}
  </button>
);

export default Button;