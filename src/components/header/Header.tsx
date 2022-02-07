import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import style from './Header.module.css';

interface IHeaderProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  onSignInOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IHeaderProps> = ({ setActive, active, onSignInOpen }) => (
  <header className={style.container}>
    <div className={style.wrapper}>
      <Link to='/'><h1 className={style.title}>RSLang</h1></Link>
    </div>
    <div className={style.wrapper}>
      <Button classExtra='btn' onClick={() => onSignInOpen(true)}>Войти</Button>
      <button type='button' className={style.burger} onClick={() => setActive(!active)}>
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>
);

export default Header;
