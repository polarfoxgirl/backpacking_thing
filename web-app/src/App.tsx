import React, { useState, useEffect } from 'react'
import './assets/css/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AboutInfo from './components/AboutInfo'
import ParkSelector from './components/ParkSelector'
import ParkTrails from './components/ParkTrails'
import TrailDetails from './components/TrailDetails'

function Header() {
  return (
    <header id="header" className="alt">
      <h1><strong>Backcountry Adventure</strong> Planner</h1>
      <nav id="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/park/Foo">Park Foo</Link></li>
          <li><Link to="/trail/42">Trail 42</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <ul className="icons">
          <li><a href="#" className="icon fa-twitter"></a></li>
          <li><a href="#" className="icon fa-instagram"></a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; TBD</li>
          <li>Design: <a href="http://templated.co">TEMPLATED</a></li>
          <li>Images: <a href="http://unsplash.com">Unsplash</a></li>
        </ul>
      </div>
    </footer>
  );
}

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
      <div>
        <Header/>

        <section>
          <Switch>
            <Route path="/park/:name" component={ParkTrails} />
            <Route path="/trail/:tid" component={TrailDetails} />
            <Route path="/about" component={AboutInfo} />
            <Route path="/"component={ParkSelector} />
          </Switch>
        </section>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
