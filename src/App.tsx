import React, {useState} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import Textbook from './pages/textbook/Textbook';
import Popup from './components/popup/Popup';
import AboutUs from './pages/aboutUs/AboutUs';
import MiniGames from './pages/games/MiniGames';
import AudioGame from './pages/games/AudioGame';
import SprintGame from './pages/games/SprintGame';
import Layout from './components/Layout';
import GameLayout from './pages/games/GameLayout';
import Level1 from './pages/textbook/Level1';
import Level2 from './pages/textbook/Level2';
import Level3 from './pages/textbook/Level3';
import Level4 from './pages/textbook/Level4';
import Level5 from './pages/textbook/Level5';
import Level6 from './pages/textbook/Level6';

const App: React.FC = () => {

    const [burgerMenuActive, setBurgerMenu] = useState(false);
    const [popupActive, setPopupActive] = useState(false);
    const [whatPopup, setWhatPopup] = useState('login');
    const [difficultLvl, setDifficultLvl] = useState('0');

    return (
        <>
            <Header active={burgerMenuActive} setActive={setBurgerMenu} onSignInOpen={setPopupActive}/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='textbook' element={<Textbook/>}/>
                    <Route path='textbook/level1' element={<Level1/>}/>
                    <Route path='textbook/level2' element={<Level2/>}/>
                    <Route path='textbook/level3' element={<Level3/>}/>
                    <Route path='textbook/level4' element={<Level4/>}/>
                    <Route path='textbook/level5' element={<Level5/>}/>
                    <Route path='textbook/level6' element={<Level6/>}/>
                    <Route path='aboutUs' element={<AboutUs/>}/>
                    <Route path='games' element={<MiniGames/>}/>
                </Route>
                <Route path='/' element={<GameLayout/>}>
                    <Route path='games/audio-game' element={<AudioGame difficultLvl={difficultLvl} />} />
                    <Route path='games/sprint' element={<SprintGame difficultLvl={difficultLvl} />} />
                </Route>
            </Routes>
            <BurgerMenu active={burgerMenuActive} setActive={setBurgerMenu}/>
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
