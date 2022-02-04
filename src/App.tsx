import React, { useState } from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BurgerMenu from './components/burgerMenu/BurgerMenu';

const App: React.FC = () => {
  const [burgerMenuActive, setBurgerMenu] = useState(false);

  return (
    <>
      <Header active={burgerMenuActive} setActive={setBurgerMenu}></Header>
      <div className="container">
        <Main></Main>
      </div>
      <Footer></Footer>
      <BurgerMenu active={burgerMenuActive} setActive={setBurgerMenu} />
  </>
  )
};

export default App;
