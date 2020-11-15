import React, { useState, useEffect } from 'react'
import {
    Redirect,
  } from "react-router-dom";

type ParkSelectState = {
  parkName: string,
  redirect: boolean,
}

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
          <section id="banner">
            <h2>Where to?</h2>
            <ParkSelectForm/>
          </section>
        );
    }
}

export default ParkSelector;