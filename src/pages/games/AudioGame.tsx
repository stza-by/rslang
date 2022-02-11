import React from 'react';
import { IGameProps } from '../../services/types';

const AudioGame: React.FC<IGameProps> = ({ difficultLvl }) => (
  <div>
    Аудиовызов
    <div>Сложность {difficultLvl}</div>
  </div>
);

export default AudioGame;
