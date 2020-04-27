import React from 'react';
import { Button } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          variant="contained"
          color="primary"
          // href="https://reactjs.org"
          // target="_blank"
        >
          Learn React 2
        </Button>
      </header>
    </div>
  );
}

export default App;
