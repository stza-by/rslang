import React from 'react';

interface ILogin {
  setWhatPopup: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<ILogin> = ({ setWhatPopup }) => (
  <>
    <p className='text-center text-lg w-9/12 tracking-widest'>
      Войдите в профиль, чтобы получить больше возможностей.
    </p>
    <form className='w-9/12 h-full gap-y-7 flex flex-col'>
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
        Войти
      </button>
    </form>
    <div className='w-9/12 flex justify-between'>
      <button
        className='hover:text-main-orange'
        type='button'
        onClick={() => setWhatPopup('signUp')}>
        Регистрация
      </button>
      <button className='hover:text-main-orange' type='button'>
        Забыли пароль?
      </button>
    </div>
  </>
);

export default Login;
