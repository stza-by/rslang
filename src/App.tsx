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
import AudioGame from './pages/games/audioGame/AudioGame';
import SprintGame from './pages/games/SprintGame';
import Layout from './components/Layout';
import GameLayout from './pages/games/GameLayout';

const App: React.FC = () => {
  const [burgerMenuActive, setBurgerMenu] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [whatPopup, setWhatPopup] = useState('login');
  const [difficultLvl, setDifficultLvl] = useState('0');

  return (
    <>
      <Header active={burgerMenuActive} setActive={setBurgerMenu} onSignInOpen={setPopupActive} />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='textbook' element={<Textbook />} />
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='games' element={<MiniGames difficultLvl={difficultLvl} setDifficultLvl={setDifficultLvl} />} />
        </Route>
        <Route path='/' element={<GameLayout />}>
          <Route path='games/audio-game' element={<AudioGame difficultLvl={difficultLvl} />} />
          <Route path='games/sprint' element={<SprintGame difficultLvl={difficultLvl} />} />
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
