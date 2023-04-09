import React from 'react';
import './styles/index.scss';
import AppRouter from './components/app/router/app-router';
import Footer from './components/footer/footer';
import Header from './components/header/header';

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
