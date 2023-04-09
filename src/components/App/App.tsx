import React from 'react';
import './styles/index.scss';
import AppRouter from './router/app-router';
import Footer from '../footer/footer';
import Header from '../header/header';

function App() {
  return (
    <div className="App dark">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
