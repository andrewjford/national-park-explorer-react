import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { saveMapPosition } from '../actions/mapActions';
import contextWrapper from '../helpers/contextWrapper';

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

  render() {

    const markers = this.props.parks.map((park, index) => {

      //convert lat_long string to array with just numbers
      const prePos = park.lat_long.split(",")
      const position =[ Number(prePos[0].match(/-?[\d]+[.][\d]+/)[0]),
      Number(prePos[1].match(/-?[\d]+[.][\d]+/)[0]) ]

      const LinkWithContext = contextWrapper(Link, this.context)

      return <Marker position={position} key={index}>
        <Popup>
          <span>
            {park.full_name}
            <br/>
            <LinkWithContext to="/test" >Test</LinkWithContext>
            <LinkWithContext to={`/parks/${park.id}`}>Details</LinkWithContext>
          </span>
        </Popup>
      </Marker>

    })

    return <div>
      <Map center={this.props.map.center}
        zoom={this.props.map.zoom}
        //bind leaflet Map object to this.leafletMap reference
        ref={m => {this.leafletMap = m;}}>

        <TileLayer
          attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
          url="https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWpvZWZvcmQiLCJhIjoiY2o2NnhqM3F0MDB0bDJxbjY0dXAwYnRwaSJ9.KqwaHtjfnfhFjk1SQrd93Q"
        />

        {markers}
      </Map>
    </div>
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
