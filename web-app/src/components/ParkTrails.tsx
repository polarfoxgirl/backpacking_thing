import React from 'react'
import { RouteComponentProps } from "react-router-dom";

type ParkParams = { name: string };

class ParkTrails extends React.Component<RouteComponentProps<ParkParams>> {
    render() {
        return (
        <p>This is Park Trails for '{this.props.match.params.name}'</p>
        );
    }
}

export default ParkTrails;