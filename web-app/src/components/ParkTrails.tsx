import React from 'react'
import { RouteComponentProps } from "react-router-dom";

type ParkParams = { name: string };

class ParkTrails extends React.Component<RouteComponentProps<ParkParams>> {
  render() {
    return (
      <section id="main" className="wrapper">
        <div className="container">
          <p>Here will be list of trails for the park #{this.props.match.params.name}</p>
        </div>
      </section>
    );
  }
}

export default ParkTrails;