import React, { useEffect, useState } from 'react';
import style from './Card.module.css';
import { getCardsAPI } from '../../services/dataAPI';
import { ICard } from '../../services/types';

const Card: any = () => {
  const [card, setCard] = useState<ICard[]>([]);
  const [audio] = useState(new Audio());
  const [audioArray, setAudio] = useState<string[]>([]);
  useEffect(() => {
    getCardsAPI()
      .then((result: ICard[]) => {
        setCard(result);
        setAudio(Array(result[0].audio).concat(result[0].audioMeaning).concat(result[0].audioExample));
      });
  }, []);
  let currentAudio = 0;
  const playAudio = () => {
    const btn = document.getElementById(`btn-${card[0].id}`) as HTMLButtonElement;
    if (currentAudio !== 3) {
      audio.src = `https://rss-words-3.herokuapp.com/${audioArray[currentAudio]}`;
      audio.play();
      btn.classList.add('active');
    } else {
      currentAudio = 0;
      btn.classList.remove('active');
    }
  };
  const nextAudio = () => {
    currentAudio += 1;
    playAudio();
  };
  audio.addEventListener('ended', nextAudio);
  return ((card.length !== 0) &&
    <div className={style.container}>
      <div className={style.header} style={{ backgroundImage: `url("https://rss-words-3.herokuapp.com/${card[0].image}")` }} >
        <div className={style.overlay} style={{ background: "linear-gradient(transparent, rgb(191, 219, 254))" }}>
          <div className={style.primary}>
            <h3>{card[0].word}</h3>
          </div>
          <div className={style.translate_block} style={{ backgroundColor: "rgb(191, 219, 254))" }}>
            <span>{card[0].wordTranslate}</span>
            <span>{card[0].transcription}</span>
            <button type='button' id={`btn-${card[0].id}`} className={`${style.btn} play-btn`} onClick={() => playAudio()}>
            </button>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.word_block}>
          <div dangerouslySetInnerHTML={{ __html: card[0].textMeaning }}></div>
          <div className={style.word_example}>{card[0].textMeaningTranslate}</div>
        </div>
        <div className={style.word_block}>
          <div dangerouslySetInnerHTML={{ __html: card[0].textExample }}></div>
          <div className={style.word_example}>{card[0].textExampleTranslate}</div>
        </div>
      </div>
    </div >
  )
};

export default Card;