import React, { useContext, useEffect, useState } from 'react';
import style from './SprintGame.module.css';
import PopupLevel from '../popupLevel/PopupLevel';
import { LevelContext, WordsContext } from '../../../components/LevelProvider';

const SprintGame: any = () => {
  const { level, setLevel } = useContext(LevelContext);
  const { words, setWords } = useContext(WordsContext);
  // const getQuestions = () => {
  //   console.log(words);
  //   setWords(getCards(1, level).then((result) => result));
  // }
  // useEffect(() => {
  //   setWords(getCards(1, level).then((result) => {
  //     console.log(result);
  //     return result
  //   }));
  // }, []);
  console.log('words', words.length);
  return (
    <div className={style.container}>
      <PopupLevel />

      <div className={style.game}>
        <h3 className={style.result}>Текущий результат: 1</h3>
        <div className={style.game__wrapper}>
          <div className={style.timer}>
            60
          </div>
          <div className={style.counter}>
            <div className={`${style.dot} active-dot`}></div>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
          </div>
          <p className={style.question}>{words.word}</p>
          <p className={style.answer}>Карта</p>
          <div className={style.button__wrapper}>
            <button type='button' className={`${style.correct} ${style.btn}`}>Верно</button>
            <button type='button' className={`${style.wrong} ${style.btn}`}>Неверно</button>
          </div>
        </div>
      </div>

    </div>
  )
};

export default SprintGame;
