import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './MiniGames.module.css';

const GameLayout: React.FC = () => (
  <main className='container min-h-screen'>
    <header className='pt-6 pb-6'>
      <Link
        to='/games'
        className={`${style.link} hover:text-orange-400 ease-in duration-300`}>
        Назад
      </Link>
    </header>
    <Outlet />
  </main>
);

export default GameLayout;
