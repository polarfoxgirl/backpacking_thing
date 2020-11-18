import React from 'react'
import { useHistory } from "react-router-dom";

type TrailListItemProps = {
  tid: string;
  trailName : string;
  trailInfo: string;
}

function TrailListItem(props : TrailListItemProps) {
  let history = useHistory();

  function handleClick() {
    history.push("/trail/" + props.tid);
  }

  return (
    <div className="container" onClick={handleClick}>
      <h3>Trail name goes here: {props.trailName}</h3>
      <p>Trail information goes here: {props.trailInfo}</p>
    </div>
  )
}

function TrailList() {
  const trails = ["1", "2", "3"];

  return (
    <div className="container">
      {trails.map((tid, _) => {
        return <TrailListItem
          tid={tid}
          trailName={"Trail" + tid}
          trailInfo={"Info" + tid}
        />
      })}
    </div>
  );

}

export default TrailList;