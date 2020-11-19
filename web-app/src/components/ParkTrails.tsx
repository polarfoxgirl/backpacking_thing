import React, {useEffect, useState} from 'react'
import { RouteComponentProps } from "react-router-dom";

import AltHeader from './AltHeader'
import ParkMap from './ParkMap'
import TrailList from './TrailList';

type ParkParams = { name: string };

function ParkTrails(props: RouteComponentProps<ParkParams>) {  
  const [trailList, setTrailList] = useState([]);
  let park_name = props.match.params.name;

  // TODO: use async/await for API calls
  useEffect(() => {
    fetch('/api/0/park_trails/' + park_name).
    then(res => res.json()).
    then(data => {
      setTrailList(data.trails);
    });
  }, []);


  return (
    <div>
      <AltHeader isLanding={false} />
      <section id="main" className="wrapper">
        <div className="container">
          <p>Here will be list of trails for the park #{park_name}</p>
          <p>Here is the API response: {trailList}</p>
        </div>
      </section>
      <ParkMap />
      <TrailList />
    </div>
  );
}

export default ParkTrails;