import React, { useEffect } from 'react';
import './styles/index.scss';

const TOKEN = '111';

function App() {

  // useEffect(() => {
  //   fetch(`https://cloud.iexapis.com/stable/stock/aapl/quote?token=${TOKEN}`).then((res) => console.log(res));
  // },[]);

  return (
    <div className="App dark">
      <header className="App-header">
        Test iex cloud app
      </header>
      <footer className="App-footer">
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </footer>
    </div>
  );
}

export default App;
