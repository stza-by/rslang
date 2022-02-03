import React from 'react';
import style from './Footer.module.css';

const Footer = () => (
  <footer className={`${style.container} bg-main-orange`}>
    <div className={style.wrapper}>
      <a href='https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-2/rs-lang/rslang.md' className={style.task}>2022 RSLang</a>
      <ul className={style.developers}>
        <li><a href='https://github.com/YuliaSavchik'>YuliaSavchik</a></li>
        <li><a href='https://github.com/GenaVinokurov'>GenaVinokurov</a></li>
        <li><a href='https://github.com/pnv13'>pnv13</a></li>
      </ul>
      <a href='https://rs.school/' className={style.school__logo}>
        <div className={style.img}></div>
      </a>
    </div>
  </footer>
);

export default Footer;