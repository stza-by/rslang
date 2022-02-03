import React from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App: React.FC = () => (
  <>
    <Header></Header>
    <div className="container">
      <Main></Main>
    </div>
    <Footer></Footer>
  </>
);

export default App;
