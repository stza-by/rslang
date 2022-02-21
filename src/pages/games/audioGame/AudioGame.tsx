import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getWordsAPI } from '../../../services/dataAPI';
import { IGameProps, IWord, IQuestions } from '../../../services/types';
import { getRandomPage, getThreeRandomNumbers } from '../../../services/utils';
import style from './AudioGame.module.css';
import trueAnswer from '../../../assets/sounds/yes.mp3';
import falseAnswer from '../../../assets/sounds/no.mp3';
import ResultPopup from '../ResultPopup';
import { changeQuestions } from '../sprint/SprintGameUtils';

const AudioGame: React.FC<IGameProps> = ({ difficultLvl }) => {
  const [words, setWords] = useState<Array<IWord>>([]);
  const [wordsResult, setWordsResult] = useState<Array<IQuestions>>([]);
  const [wordsIsLoaded, setWordsIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wordNumber, setWordNumber] = useState(0);
  const [musicIsPlay, setMusicIsPlay] = useState(false);
  const [audio] = useState(new Audio());
  const [isAnswered, setIsAnswered] = useState(false);
  const [lastWord, setLastWord] = useState<HTMLButtonElement | null>(null);
  const [resultArray, setResultArray] = useState<boolean[]>([]);

  const playSound = () => {
    if (!musicIsPlay) {
      audio.src = `https://react-rslang-project.herokuapp.com/${words[wordNumber].audio}`;
      audio.play();
      setMusicIsPlay(true);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === '1') console.log(1);
    if (e.key === '2') console.log(2);
    if (e.key === '3') console.log(3);
    if (e.key === '4') console.log(4);
  };

  const answers = useMemo(() => getThreeRandomNumbers(wordNumber), [wordNumber]);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.value === words[wordNumber].wordTranslate) {
      audio.src = trueAnswer;
      target.style.color = 'green';
      setResultArray([...resultArray, true]);
    } else {
      audio.src = falseAnswer;
      target.style.color = 'red';
      setResultArray([...resultArray, false]);
    }
    audio.play();
    setLastWord(target);
    setIsAnswered(true);
  };

  const nextWord = () => {
    if (wordNumber < words.length - 1) {
      setWordNumber(wordNumber + 1);
      if (!isAnswered) setResultArray([...resultArray, false]);
    }
    if (wordNumber === 19 && !isAnswered) setResultArray([...resultArray, false]);
    if (lastWord) lastWord.style.color = 'black';
    setIsAnswered(false);
  };

  const getWords = useCallback(() => {
    const randomPage = getRandomPage();
    let wordsParams;
    const textBookParams = localStorage.getItem('gamesParams');
    if (textBookParams) {
      wordsParams = JSON.parse(textBookParams);
    } else {
      wordsParams = [+difficultLvl, randomPage];
    }
    getWordsAPI(wordsParams[0], wordsParams[1]).then(
      (res) => {
        setWords(res);
        setWordsIsLoaded(true);
        setWordsResult(changeQuestions(res));
      },
      (e: string) => {
        setError(e);
        setWordsIsLoaded(true);
      },
    );
  }, [difficultLvl]);

  useEffect(() => {
    getWords();
    audio.addEventListener('ended', () => {
      setMusicIsPlay(false);
    });
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      audio.removeEventListener('ended', () => {
        setMusicIsPlay(false);
      });
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [audio, getWords]);

  if (error) return <div>{error}</div>;
  if (!wordsIsLoaded) return <div>Загрузка...</div>;

  return (
    <main className={`${style.container} p-3 flex flex-col items-center justify-evenly gap-y-5`}>
      {resultArray.length === 20 && (
        <ResultPopup resultArray={resultArray} words={wordsResult} score={null} game='Аудиовызов' />
      )}
      <div className={style.game__wrapper}>
        <div className='flex flex-col items-center mb-10'>
          <div
            style={
              isAnswered
                ? {
                  backgroundImage: `url("https://rss-words-3.herokuapp.com/${words[wordNumber].image}")`,
                }
                : {
                  backgroundImage: 'none',
                }
            }
            className='flex items-center justify-center relative w-52 h-52 border-slate-700 bg-white hover:bg-orange-400 ease-in duration-300 rounded-full bg-center bg-cover bg-no-repeat'>
            <button
              className={style.btn__audio}
              disabled={musicIsPlay}
              type='button'
              onClick={playSound}>
              {' '}
            </button>
            <audio
              src={`https://react-rslang-project.herokuapp.com/${words[wordNumber].audio}`}
              autoPlay>
              <track kind='captions' />
            </audio>
            <i
              className={`${isAnswered ? 'opacity-0 pointer-events-none' : 'opacity-100'
                } fa-solid fa-podcast text-6xl flex items-center justify-center text-blue-500 leading-4 ease-in duration-300`}
            />
          </div>
          <div
            className={`${isAnswered ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } text-xl pt-5`}>
            {words[wordNumber].word} {words[wordNumber].transcription}{' '}
            {words[wordNumber].wordTranslate}
          </div>
        </div>
        <ul className={style.list}>
          {answers.map((wordIndex) => (
            <li key={words[wordIndex].id}>
              <button
                disabled={isAnswered}
                type='button'
                value={words[wordIndex].wordTranslate}
                className='border-2 border-black p-2 cursor-pointer text-m hover:text-main-orange ease-in duration-300 hover:bg-main-white rounded-md'
                onClick={checkAnswer}>
                {words[wordIndex].wordTranslate}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button type='button' className={style.btn} onClick={nextWord}>
        {isAnswered ? 'дальше' : 'пропустить'}
      </button>
    </main>
  );
};

export default AudioGame;
