import React, { useState, useEffect } from 'react'
import {
    Redirect,
  } from "react-router-dom";

import AltHeader from './AltHeader'

type ParkSelectState = {
  parkName: string,
  redirect: boolean,
}

const IS_LANDING_CLASS = "landing";

class ParkSelectForm extends React.Component<{}, ParkSelectState> {
  constructor(props: {}) {
    super(props);

    this.state = {parkName: 'rocky_mountain', redirect: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:  React.ChangeEvent<HTMLSelectElement>) {
    this.setState({parkName: event.target.value});
  }

  handleSubmit(event:  React.FormEvent<HTMLFormElement>) {
    this.setState({redirect: true});
    event.preventDefault();
  }

  componentDidMount() {
const IS_LANDING_CLASS = "landing";
    document.body.classList.add(IS_LANDING_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(IS_LANDING_CLASS);
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={"/park/" + this.state.parkName}/>);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Select your destination:</p>
          <select value={this.state.parkName} onChange={this.handleChange}>
            <option value="rocky_mountain">Rocky Mountain National Park</option>
            <option value="olympic">Olympic National Park</option>
            <option value="zion">Zion National Park</option>
          </select>
        </label>
        <input type="submit" value="Submit" className="button special big" />
      </form>
    );
  }
}

class ParkSelector extends React.Component {
    render() {
        return (
          <div>
            <AltHeader isLanding={true} />
            <section id="banner">
              <h2>Where to?</h2>
              <ParkSelectForm/>
            </section>
          </div>
        );
    }
}

export default ParkSelector;