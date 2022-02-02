import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/Main';
import style from './Nav.module.css';

const Nav = () => (
  <>
    <nav>
      <ul className={style.ul}>
        <li><Link to='/' className={style.link}>Учебник</Link></li>
        <li><Link to='/' className={style.link}>Мини-игры</Link></li>
        <li><Link to='/' className={style.link}>Статистика</Link></li>
      </ul>

    </nav>
    {/* <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/'></Route>
      <Route path='/'></Route>
    </Routes> */}
  </>
);

export default Nav;