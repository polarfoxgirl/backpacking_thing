import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    fetch('/message').then(res => res.json()).then(data => {
      setCurrentMessage(data.msg);
    });
  }, []);

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The current message is "{currentMessage}".</p>
        <p>The current time is {currentTime}.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
