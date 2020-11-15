import React, { useState, useEffect } from 'react'
import './assets/css/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ParkSelector from './components/ParkSelector'
import ParkTrails from './components/ParkTrails'
import TrailDetails from './components/TrailDetails'

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
    <Router>
      <div className="App">
        <header className="App-header">
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/park/Foo">Park Foo</Link>
            </li>
            <li>
              <Link to="/trail/42">Trail 42</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/park/:name" component={ParkTrails} />
          <Route path="/trail/:tid" component={TrailDetails} />
          <Route path="/"component={ParkSelector} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
