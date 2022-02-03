import React, { useState } from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PopupLogin from './components/popup/PopupLogin';
import PopupSignIn from './components/popup/PopupSignUp';

const App: React.FC = () => {
  const [popupActive, setPopupActive] = useState(false);
  const [whatPopup, setWhatPopup] = useState('login');

  return (
    <>
      <Header setActive={setPopupActive} />
      <div className='container'>
        <Main />
      </div>
      <Footer />
      {whatPopup === 'login' ? (
        <PopupLogin active={popupActive} setActive={setPopupActive} setPopup={setWhatPopup} />
      ) : (
        <PopupSignIn active={popupActive} setActive={setPopupActive} setPopup={setWhatPopup} />
      )}
    </>
  );
};

export default App;
