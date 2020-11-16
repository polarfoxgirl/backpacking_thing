import React, { useState, useEffect } from 'react'
import './assets/css/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AboutInfo from './components/AboutInfo'
import ParkSelector from './components/ParkSelector'
import ParkTrails from './components/ParkTrails'
import TrailDetails from './components/TrailDetails'

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
  const [currentMessage, setCurrentMessage] = useState("foo");

  useEffect(() => {
    fetch('/message').then(res => res.json()).then(data => {
      setCurrentMessage(data.msg);
    });
  }, []);

  return (
    <Router>
      <div >
        <Switch>
          <Route path="/park/:name" component={ParkTrails} />
          <Route path="/trail/:tid" component={TrailDetails} />
          <Route path="/about" component={AboutInfo} />
          <Route path="/"component={ParkSelector} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
