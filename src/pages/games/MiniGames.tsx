import React from 'react';
import style from './MiniGames.module.css';
import { getAllGames } from '../../services/utils';
import Game from './Game';

const MiniGames: React.FC = () => {
  const games = getAllGames();

  return (
    <main className={style.container}>
      <div className='flex justify-around'>
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
};

export default MiniGames;
