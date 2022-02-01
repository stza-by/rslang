import React from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';

const App: React.FC = () => (
  <div className="container">
    <Header></Header>
    <Main></Main>
  </div>
);

export default App;
