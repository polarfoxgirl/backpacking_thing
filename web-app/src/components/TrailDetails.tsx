import React from 'react'
import { RouteComponentProps } from "react-router-dom";

import AltHeader from './AltHeader'

type TrailParams = { tid: string };

class TrailDetails extends React.Component<RouteComponentProps<TrailParams>> {
  render() {
    return (
      <div>
        <AltHeader isLanding={false} />
        <section id="main" className="wrapper">
          <div className="container">
            <p>Here will be some trail info about trail config #{this.props.match.params.tid}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default TrailDetails;