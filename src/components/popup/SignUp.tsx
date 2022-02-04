import React from 'react';

const SignUp: React.FC = () => (
  <>
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
  </>
);

export default SignUp;
