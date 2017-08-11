import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

const ParkMarker = (props) => {
  return <Marker position={props.position}>
    <Popup>
      <span>
        {props.park.full_name}
        <br/>
        <Link to="/">Test</Link>
      </span>
      {/* <Link to={`/parks/${props.park.id}"`}
       >Details</Link> */}
    </Popup>
  </Marker>
}

export default ParkMarker;
