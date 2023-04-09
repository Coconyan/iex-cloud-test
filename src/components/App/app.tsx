import React, { useState } from 'react';
import './styles/index.scss';
import AppRouter from './router/app-router';
import Footer from '../footer/footer';
import Header from '../header/header';

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <div className={`App ${theme && 'dark'}`}>
      <div>
        <button className='theme-button' onClick={() => setTheme(!theme)}>change Theme</button>
        <Header />
      </div>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
