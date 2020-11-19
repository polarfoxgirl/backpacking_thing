import React, {useEffect, useState} from 'react'
import { RouteComponentProps } from "react-router-dom";

import AltHeader from './AltHeader'
import TrailMap from './TrailMap';

type TrailParams = { tid: string };

function TrailDetails(props: RouteComponentProps<TrailParams>) {
  const [trailInfo, setTrailInfo] = useState("");
  let tid = props.match.params.tid;

  // TODO: use async/await for API calls
  useEffect(() => {
    fetch('/api/0/trail/' + tid).
    then(res => res.json()).
    then(data => {
      setTrailInfo(data.name + " " + data.info);
    });
  }, []);

  return (
    <div>
      <AltHeader isLanding={false} />
      <section id="main" className="wrapper">
        <div className="container">
          <p>Here will be some trail info about trail config #{props.match.params.tid}: {trailInfo}</p>
        </div>
        <TrailMap />
      </section>
    </div>
  );
}

export default TrailDetails;