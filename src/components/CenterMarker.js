import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import convertLatLng from '../helpers/mapHelpers';

const CenterMarker = (props) => {
  const position = convertLatLng(props.center.latLong)
  const directionLink = "https://www.google.com/maps/dir//"+position[0].toString()+
  ",+" + position[1].toString();
  return <Marker position={position} >
    <Popup>
      <span>
        <b>{props.center.name}</b>
        <br/><br/>
        <span>{props.center.description}</span>
        <br/>
        <a href={directionLink}>Directions</a>
      </span>
    </Popup>
  </Marker>
}

export default CenterMarker;
