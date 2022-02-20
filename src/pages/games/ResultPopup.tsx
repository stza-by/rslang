import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../components/popup/UserContext';
import { getUserStatistic, setUserStatistic } from '../../services/dataAPI';
import { IResultPopup } from '../../services/types';
import style from './MiniGames.module.css';

const ResultPopup: React.FC<IResultPopup> = ({ resultArray, words, score }) => {
  const [audio, setAudio] = useState(new Audio());

  const { user, setUser } = useContext(UserContext);
  const [id] = useState<any>(user?.id);
  let learnedWords = 0;
  const onClick = (url: string) => {
    audio.src = `https://react-rslang-project.herokuapp.com/${url}`;
    audio.play();
  }
  const statistic = () => {
    learnedWords = resultArray.filter(el => el === true).length;
    return {
      date: new Date(),
      percentCorrect: learnedWords / 20 * 100,
    }
  }
  setUserStatistic(id, learnedWords, statistic());
  return (
    <div className={style.popup__shadow}>
      <div className={style.popup}>
        <Link to='/games' className={style.close}></Link>
        {(score !== null) && <h3 className={style.title}>Ваш результат: {score}</h3>}
        <div className={style.result__container}>
          {
            resultArray.map((res, i) =>
            (<div className={style.result}>
              <div>{(res === false) ? "\u274c" : "\u2705"}</div>
              <div className={style.word}>{words[i].word}</div>
              <div className={style.word}>{words[i].transcription}</div>
              <div className={style.word}>{words[i].wordTranslateRight}</div>
              <button type='button' onClick={() => onClick(words[i].audio)}>
                {'\u25B6'}
              </button>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default ResultPopup;