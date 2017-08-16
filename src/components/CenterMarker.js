import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import convertLatLng from '../helpers/mapHelpers';

const CenterMarker = (props) => {
  const position = convertLatLng(props.center.latLong)
  return <Marker position={position} >
    <Popup>
      <span>{props.center.name}</span>
    </Popup>
  </Marker>
}

export default CenterMarker;
