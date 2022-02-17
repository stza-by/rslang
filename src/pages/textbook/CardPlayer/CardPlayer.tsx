import React, { useState, FC } from 'react';
import PlayerButton from '../../../components/button/PlayerButton';

export interface ICardPlayerProps {
  url: string;
}

const CardPlayer: FC<ICardPlayerProps> = (playerProps) => {
  const { url } = playerProps;
  const [audio] = useState(new Audio(url));

  return <PlayerButton buttonName={'\u25B6'} onClick={() => audio.play()} />;
};
export default CardPlayer;
