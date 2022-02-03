import React, { useEffect } from 'react';
import style from './Popup.module.css';

interface IPopup {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setPopup: React.Dispatch<React.SetStateAction<string>>;
}

const PopupSignUp: React.FC<IPopup> = ({ active, setActive, setPopup }) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActive(false);
    }
  };

  const handleExit = () => {
    setActive(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      if (!active) setPopup('login');
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div
      className={!active ? style.container : `${style.container} ${style.activeContainer}`}
      onClick={handleExit}
      onKeyDown={() => handleKeyDown}
      role='textbox'
      tabIndex={0}>
      <div
        className={!active ? style.content : `${style.content} ${style.activeContent}`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => handleKeyDown}
        role='textbox'
        tabIndex={0}>
        <div className='w-full flex justify-end'>
          <i
            className='fas fa-times text-2xl cursor-pointer hover:text-main-orange flex items-center justify-center leading-4'
            onClick={handleExit}
            role='button'
            onKeyDown={() => handleKeyDown}
            tabIndex={0}
            aria-label='Close Popup'
          />
        </div>
        <p className='text-center text-lg w-9/12 tracking-widest'>
          Создайте профиль, чтобы получить больше возможностей.
        </p>
        <form className='h-full w-9/12 gap-y-7 flex flex-col'>
          <input
            className='p-2 w-full border-2 border-gray-600'
            type='text'
            autoComplete='username'
            placeholder='Имя'
          />
          <input
            className='p-2 w-full border-2 border-gray-600'
            type='email'
            autoComplete='username'
            placeholder='E-mail'
          />
          <input
            className='p-2 w-full border-2 border-gray-600'
            type='password'
            autoComplete='current-password'
            placeholder='Пароль'
          />
          <button
            className='p-2 border-2 border-white bg-yellow-400 w-full text-lg font-bold hover:border-gray-600'
            type='button'>
            Создать аккаунт
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupSignUp;
