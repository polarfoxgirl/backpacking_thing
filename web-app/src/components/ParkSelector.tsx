import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class ParkSelector extends React.Component {
    render() {
        return (
          <section id="banner">
            <h2>Where to?</h2>
            <form method="post" action="#">
              <div className="select-wrapper">
                <select name="category" id="category">
                  <option value="">- Select your destination area -</option>
                  <option value="rocky_mountain">Rocky Mountain National Park</option>
                  <option value="olympic">Olympic National Park</option>
                  <option value="zion">Zion National Park</option>
                </select>
              </div>
              <ul className="actions">
                <Link to="#" className="button special big">Get Trails</Link>
              </ul>
            </form>
          </section>
        );
    }
}

export default ParkSelector;