import React from 'react';
import { Map, Marker, Popup, TileLayer, Circle } from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchParks } from '../actions/npsActions';
import { saveMapPosition } from '../actions/mapActions';
import ParkMarker from '../components/ParkMarker';
import contextWrapper from '../helpers/contextWrapper';

class MapContainer extends React.Component {

  constructor() {
    super();

  }

  componentDidMount() {
    this.props.fetchParks();

    const leafletMap = this.leafletMap.leafletElement;

    leafletMap.on('moveend', () => {
      this.props.saveMapPosition(leafletMap.getCenter(), leafletMap.getZoom());
      console.log(this.props.map.center)
    })
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
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

    const origin = this.props.map.center
    const zoom = this.props.map.zoom
    return (
      <Map center={origin} zoom={zoom} ref={m => {this.leafletMap = m;}}>
        <TileLayer
          attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
          url="https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWpvZWZvcmQiLCJhIjoiY2o2NnhqM3F0MDB0bDJxbjY0dXAwYnRwaSJ9.KqwaHtjfnfhFjk1SQrd93Q"
        />
        {markers}
      </Map>
    )
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
    fetchParks: fetchParks,
    saveMapPosition: saveMapPosition,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
