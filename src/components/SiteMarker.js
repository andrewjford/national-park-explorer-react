import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import convertLatLng from '../helpers/mapHelpers';

const SiteMarker = (props) => {
  const position = convertLatLng(props.site.latLong)
  const directionLink = "https://www.google.com/maps/dir//"+position[0].toString()+
  ",+" + position[1].toString();

  const violetMarker = icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return <Marker icon={violetMarker} position={position} >
    <Popup>
      <span>
        <b>{props.site.name}</b>
        <br/><br/>
        <span>{props.site.description}</span>
        <br/>
        <a href={directionLink}>Directions</a>
      </span>
    </Popup>
  </Marker>
}

export default SiteMarker;
