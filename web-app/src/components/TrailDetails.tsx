import React from 'react'
import { RouteComponentProps } from "react-router-dom";

type TrailParams = { tid: string };

class TrailDetails extends React.Component<RouteComponentProps<TrailParams>> {
    render() {
        return (
        <p>This is Trail Details for #{this.props.match.params.tid} and search {this.props.location.search}</p>
        );
    }
}

export default TrailDetails;