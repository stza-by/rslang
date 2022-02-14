import React, { useContext, useEffect, useState, MouseEvent } from 'react';
import style from './SprintGame.module.css';
import { getCardsAPI } from '../../../services/dataAPI';
import { ICard, IGameProps, IQuestions } from '../../../services/types';
import { changeQuestions, isCorrect, timerFunc } from './SprintGameUtils';

const SprintGame: any = ({ difficultLvl }: any) => {
  const [backWords, setBackWords] = useState<ICard[]>([]);
  const [words, setWords] = useState<IQuestions[]>([]);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [resultArray, setResultArray] = useState([]);
  const [score, setScore] = useState<number>(0);
  const [correctScore, setCorrectScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(60);
  const randomPage = () => (Math.floor(Math.random() * (19)));
  const getCards = async () => {
    getCardsAPI(randomPage(), +difficultLvl).then((result) => {
      setBackWords(result);
      setWords(changeQuestions(result));
    });
  }
  useEffect(() => {
    getCards();
  }, []);
  useEffect(() => {
    timerFunc(timer, setTimer);
  }, [timer]);
  const eventCorrect = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLButtonElement;
    const attribute = btn.dataset.correct;
    return (attribute === 'correct')
      ? isCorrect(words, backWords, question, answer, resultArray, score, setQuestion, setAnswer, setScore, correctScore, setCorrectScore, true)
      : isCorrect(words, backWords, question, answer, resultArray, score, setQuestion, setAnswer, setScore, correctScore, setCorrectScore, false);
  }
  return (
    (words.length !== 0) &&
    <div className={style.container}>
      < div className={style.game}>
        <h3 className={style.result}>Текущий результат: {score}</h3>
        <div className={style.game__wrapper}>
          <div className={style.timer}>
            {timer}
          </div>
          <div className={style.counter}>
            <div className={`${style.dot} active-dot`}></div>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
          </div>
          <p className={style.question}>{words[question].word}</p>
          <p className={style.answer}>{words[answer].wordTranslate}</p>
          <div className={style.button__wrapper}>
            <button type='button' className={`${style.correct} ${style.btn}`} data-correct='correct' onClick={(e) => eventCorrect(e)}>Верно</button>
            <button type='button' className={`${style.wrong} ${style.btn}`} data-correct='wrong' onClick={(e) => eventCorrect(e)}>Неверно</button>
          </div>
        </div>
      </div>
    </div >
  )
};

export default SprintGame;
