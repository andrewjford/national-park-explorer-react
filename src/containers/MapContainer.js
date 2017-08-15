import React from 'react';
import { icon } from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { saveMapPosition } from '../actions/mapActions';
import contextWrapper from '../helpers/contextWrapper';
import convertLatLng from '../helpers/mapHelpers';

class MapContainer extends React.Component {

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;

    leafletMap.on('moveend', () => {
      this.props.saveMapPosition(leafletMap.getCenter(), leafletMap.getZoom());
    });


  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleZoomClick = (event) => {
    event.preventDefault();
    let position = convertLatLng(event.target.dataset.position);
    this.leafletMap.leafletElement.flyTo(position, 9);
  }

  render() {
    var greenMarker = icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const markers = this.props.parks.map((park, index) => {
      const position = convertLatLng(park.lat_long)
      const LinkWithContext = contextWrapper(Link, this.context)

      return <Marker icon={greenMarker} position={position} key={index}>
        <Popup>
          <span>
            {park.full_name}
            <br/>
            <a href="" data-position={position} onClick={this.handleZoomClick}>Zoom</a>
            <LinkWithContext to={`/parks/${park.id}`}>Details</LinkWithContext>
          </span>
        </Popup>
      </Marker>

    })

    return <Map center={this.props.map.center}
        zoom={this.props.map.zoom}
        style={{height: (window.innerHeight - 72)}}
        //bind leaflet Map object to this.leafletMap reference
        ref={m => {this.leafletMap = m;}}>
        <TileLayer
          attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
          url="https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWpvZWZvcmQiLCJhIjoiY2o2NnhqM3F0MDB0bDJxbjY0dXAwYnRwaSJ9.KqwaHtjfnfhFjk1SQrd93Q"
        />

        {markers}
      </Map>
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.nps.parks,
    map: state.map
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveMapPosition: saveMapPosition,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
