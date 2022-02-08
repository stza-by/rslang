import React from 'react';
import { getAllGames } from '../../services/utils';
import Game from './Game';

const MiniGames: React.FC = () => {
  const games = getAllGames();

  return (
    <main>
      <div className='flex justify-around'>
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
};

export default MiniGames;
