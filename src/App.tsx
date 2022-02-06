import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Textbook from './pages/textbook/Textbook';
import Card from './components/card/Card';

const App: React.FC = () => (
  <>
    <Header></Header>
    <div className="container">
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/textbook' element={<Textbook />} />
      </Routes>
    </div>
    <Footer></Footer>
  </>
);

export default App;
