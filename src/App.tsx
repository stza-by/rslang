import React, { useState } from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Popup from './components/popup/Popup';

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
      <Popup
        active={popupActive}
        setActive={setPopupActive}
        popup={whatPopup}
        setPopup={setWhatPopup}
      />
    </>
  );
};

export default App;
