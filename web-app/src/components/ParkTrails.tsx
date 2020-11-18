import React from 'react'
import { RouteComponentProps } from "react-router-dom";

import AltHeader from './AltHeader'
import ParkMap from './ParkMap'
import TrailList from './TrailList';

type ParkParams = { name: string };

class ParkTrails extends React.Component<RouteComponentProps<ParkParams>> {
  render() {
    return (
      <div>
        <AltHeader isLanding={false} />
        <section id="main" className="wrapper">
          <div className="container">
            <p>Here will be list of trails for the park #{this.props.match.params.name}</p>
          </div>
        </section>
        <ParkMap />
        <TrailList />
      </div>
    );
  }
}

export default ParkTrails;