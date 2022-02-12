import React from 'react';
import { getAllGames } from '../../services/utils';
import Game from './Game';
import PopupLevel from './popupLevel/PopupLevel';

const MiniGames: React.FC = () => {
  const games = getAllGames();

  return (
    <div className='flex justify-around'>
      {/* <PopupLevel /> */}
      {games.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
};

export default MiniGames;
