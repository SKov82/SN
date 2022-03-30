import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./components/Rating";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Rating value={4} />
      </header>
    </div>
  );
}

export default App;
