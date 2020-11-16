import React, { useState, useEffect } from 'react'
import {
  Link
} from "react-router-dom";


function AltHeader(props : {isLanding: boolean}) {

  let cssName = props.isLanding ? "alt" : "";
  return (
    <header id="header" className={cssName}>
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

export default AltHeader;