import React from 'react';
import './styles/index.scss';
import StockList from '../stocks-list/stock-list';

function App() {
  return (
    <div className="App dark">
      <header className="App-header">
        Test iex cloud app
      </header>
      <StockList />
      <footer className="App-footer">
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </footer>
    </div>
  );
}

export default App;
