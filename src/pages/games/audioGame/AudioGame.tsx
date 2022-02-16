import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getWordsAPI } from '../../../services/dataAPI';
import { IGameProps, IWord } from '../../../services/types';
import { getRandomPage, getThreeRandomNumbers } from '../../../services/utils';
import style from './AudioGame.module.css';
import trueAnswer from '../../../assets/sounds/yes.mp3';
import falseAnswer from '../../../assets/sounds/no.mp3';

const AudioGame: React.FC<IGameProps> = ({ difficultLvl }) => {
  const [words, setWords] = useState<Array<IWord>>([]);
  const [wordsIsLoaded, setWordsIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wordNumber, setWordNumber] = useState(0);
  const [musicIsPlay, setMusicIsPlay] = useState(false);
  const [audio] = useState(new Audio());
  const [isAnswered, setIsAnswered] = useState(false);
  const [lastWord, setLastWord] = useState<HTMLButtonElement | null>(null);

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
      console.log(true);
      target.style.color = 'green';
    } else {
      audio.src = falseAnswer;
      console.log(false);
      target.style.color = 'red';
    }
    audio.play();
    setLastWord(target);
    setIsAnswered(true);
  };

  const nextWord = () => {
    if (wordNumber < words.length - 1) setWordNumber(wordNumber + 1);
    if (lastWord) lastWord.style.color = 'black';
    setIsAnswered(false);
  };

  const getWords = useCallback(() => {
    const randomPage = getRandomPage();
    getWordsAPI(+difficultLvl, randomPage).then(
      (res) => {
        setWords(res);
        setWordsIsLoaded(true);
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
    <main
      className={`${style.container} p-3 flex flex-col items-center justify-evenly bg-blue-200 gap-y-5`}>
      <div className='flex flex-col items-center'>
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
          className='flex items-center justify-center relative w-52 h-52 border-2 border-slate-700 bg-orange-200 hover:bg-orange-500 ease-in duration-300 rounded-full bg-center bg-cover bg-no-repeat'>
          <button
            className='w-52 h-52 fixed rounded-full cursor-pointer'
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
            className={`${
              isAnswered ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } fa-solid fa-podcast text-6xl flex items-center justify-center text-blue-500 leading-4 ease-in duration-300`}
          />
        </div>
        <div
          className={`${
            isAnswered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } text-xl pt-3`}>
          {words[wordNumber].word} {words[wordNumber].transcription}
        </div>
      </div>
      <ul className='flex'>
        {answers.map((wordIndex) => (
          <li key={words[wordIndex].id}>
            <button
              disabled={isAnswered}
              type='button'
              value={words[wordIndex].wordTranslate}
              className='ml-5 mr-5 border-2 border-black p-2 cursor-pointer text-xl hover:text-main-orange ease-in duration-300 hover:bg-main-white rounded-md'
              onClick={checkAnswer}>
              {words[wordIndex].wordTranslate}
            </button>
          </li>
        ))}
      </ul>
      <button type='button' className='text-2xl ease-in duration-300' onClick={nextWord}>
        {isAnswered ? 'дальше' : 'пропустить'}
      </button>
    </main>
  );
};

export default AudioGame;
