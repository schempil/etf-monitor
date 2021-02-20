import React from 'react';
import './App.css';
import {HeaderBar} from "./headerBar/HeaderBar";
import {EtfList} from "./etfList/EtfList";


function App() {

  return (
    <div className="App" data-testid="App Container">
      <header className="App-header">
					<HeaderBar />
					<EtfList />
      </header>
    </div>
  );
}

export default App;
