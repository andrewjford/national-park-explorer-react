import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { saveMapPosition } from '../actions/mapActions';
import convertLatLng from '../helpers/mapHelpers';
import ParkMarker from '../components/ParkMarker';

class MapContainer extends React.Component {

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;

    leafletMap.on('moveend', () => {
      this.props.saveMapPosition(leafletMap.getCenter(), leafletMap.getZoom());
    });
  }

  // to set this react routing context for leaflet elements to access
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleZoomClick = (event) => {
    event.preventDefault();
    let position = convertLatLng(event.target.dataset.position);
    this.leafletMap.leafletElement.flyTo(position, 9);
  }

  render() {
    const markers = this.props.parks.map((park, index) => {
      return <ParkMarker park={park}
        key={index}
        handleZoomClick={this.handleZoomClick}
        context={this.context} />
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
