import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchParks } from '../actions/npsActions'

class MapContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      lat: 37.0902,
      lng: -95.7129,
      zoom: 4,
    }

    this.lol = this.lol.bind(this);
  }

  componentDidMount() {
    this.props.fetchParks();
  }

  lol() {
    console.log(this.props)
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
              <button onClick={this.lol}>LOL</button>
            </span>
          </Popup>
        </Marker>
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
