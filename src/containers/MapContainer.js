import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchParks } from '../actions/npsActions';
import ParkMarker from '../components/ParkMarker';
import contextWrapper from '../helpers/contextWrapper';

class MapContainer extends React.Component {

  constructor() {
    super();

    this.lol = this.lol.bind(this);
  }

  componentDidMount() {
    this.props.fetchParks();
  }

  lol() {
    console.log(this.props)
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
          </span>
          {/* <Link to={`/parks/${props.park.id}"`}
           >Details</Link> */}
        </Popup>
      </Marker>
      // <ParkMarker park={park} position={position} key={index}/>
    })

    const origin = [37.0902, -95.7129]
    const zoom = 4
    return (
      <Map center={origin} zoom={zoom}>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchParks: fetchParks,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
