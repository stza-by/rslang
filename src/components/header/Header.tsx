import React from 'react';
import Button from '../button/Button';
import style from './Header.module.css';

interface IHeaderProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IHeaderProps> = ({ setActive }) => (
  <header className={style.container}>
    <div className={style.wrapper}>
      <h1 className={style.title}>RSLang</h1>
      <a href='/' className={style.link}>
        О команде
      </a>
    </div>
    <div className={style.wrapper}>
      <Button onClick={() => setActive(true)}>Войти</Button>
      <button type='button' className={style.burger}>
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>
);

export default Header;
