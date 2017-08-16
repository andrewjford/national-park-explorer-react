import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import { Link } from 'react-router-dom';

import contextWrapper from '../helpers/contextWrapper';
import convertLatLng from '../helpers/mapHelpers';

const ParkMarker = (props) => {
  var greenMarker = icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const position = convertLatLng(props.park.latLong)
  const LinkWithContext = contextWrapper(Link, props.context)

  return <Marker icon={greenMarker} position={position}>
    <Popup>
      <span>
        {props.park.fullName}
        <br/>
        <a href=""
          data-position={position}
          data-parkcode={props.park.parkCode}
          onClick={props.handleZoomClick}
          >Zoom</a>
        <LinkWithContext to={`/parks/${props.park.id}`}>Details</LinkWithContext>
      </span>
    </Popup>
  </Marker>
}

export default ParkMarker;
