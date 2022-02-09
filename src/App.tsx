import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import Textbook from './pages/textbook/Textbook';
import Popup from './components/popup/Popup';
import AboutUs from './pages/aboutUs/AboutUs';
import MiniGames from './pages/games/MiniGames';
import AudioGame from './pages/games/AudioGame';
import SprintGame from './pages/games/sprint/SprintGame';
import Layout from './components/Layout';
import GameLayout from './pages/games/GameLayout';

const App: React.FC = () => {
  const [burgerMenuActive, setBurgerMenu] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [whatPopup, setWhatPopup] = useState('login');

  return (
    <>
      <Header active={burgerMenuActive} setActive={setBurgerMenu} onSignInOpen={setPopupActive} />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='textbook' element={<Textbook />} />
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='games' element={<MiniGames />} />
        </Route>
        <Route path='/' element={<GameLayout />}>
          <Route path='/games/audio-game' element={<AudioGame />} />
          <Route path='/games/sprint' element={<SprintGame />} />
        </Route>
      </Routes>
      <BurgerMenu active={burgerMenuActive} setActive={setBurgerMenu} />
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
