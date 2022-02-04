import React from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';

const App: React.FC = () => (
  <>
    <Header></Header>
    <div className="container">
      <Main></Main>
      <Card></Card>
    </div>
    <Footer></Footer>
  </>
);

export default App;
