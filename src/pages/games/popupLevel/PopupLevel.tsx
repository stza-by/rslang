import React, { useContext, useEffect, useState } from 'react';
import { LevelContext } from '../../../components/LevelProvider';
import style from './PopupLevel.module.css';
import { getCards } from '../../../services/dataAPI';

const PopupLevel: React.FC = () => {
  const { level, setLevel } = useContext(LevelContext);
  const [words, setWords] = useState<any>({});
  useEffect(() => {
    setLevel(level);
    setWords(getCards(1, level).then((result) => {
      console.log(result);
      return result
    }));
  }, [level]);
  const chooseLevel = (e: any) => {
    const btn = e.target as HTMLButtonElement;
    setLevel(Number(btn.dataset.level));
    document.getElementById('levelsPopup')?.classList.add('close-popup');
  }
  return (
    <div className={style.popup__shadow} id='levelsPopup'>
      <div className={style.popup}>
        <div className={style.close}></div>
        <h3 className={style.title}>Выберете сложность задания</h3>
        <div className={style.levels__container}>
          <button type='button' className={style.level} data-level='0' onClick={(e) => chooseLevel(e)}>1</button>
          <button type='button' className={style.level} data-level='1' onClick={(e) => chooseLevel(e)}>2</button>
          <button type='button' className={style.level} data-level='2' onClick={(e) => chooseLevel(e)}>3</button>
          <button type='button' className={style.level} data-level='3' onClick={(e) => chooseLevel(e)}>4</button>
          <button type='button' className={style.level} data-level='4' onClick={(e) => chooseLevel(e)}>5</button>
          <button type='button' className={style.level} data-level='5' onClick={(e) => chooseLevel(e)}>6 </button>
        </div>
      </div>
    </div>
  )
};

export default PopupLevel;