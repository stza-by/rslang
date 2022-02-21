import React, {useState, FC, AudioHTMLAttributes} from 'react';
import PlayerButton from '../../../components/button/PlayerButton';

export interface ICardPlayerProps {
  url: string;
  audioNameList: string[];
}

const CardPlayer: FC<ICardPlayerProps> = ({url, audioNameList}) => {

  const audioList: Array<string> = [];
  let currentSong = 0;
  Object.values(audioNameList)
      .forEach(
          audioName => audioList.push(url.concat(audioName)));

  const playAudio = () => {
      console.log("I'm here")
      const audioPlayer = new Audio();
      audioPlayer.src=audioList[currentSong];
      audioPlayer.autoplay = true;
      const nextAudio = () => {
          currentSong += 1;
          playAudio();
      };
      audioPlayer.addEventListener('ended', nextAudio);
  }

  return <PlayerButton buttonName={'\u25B6'} onClick={playAudio} />;
};
export default CardPlayer;
