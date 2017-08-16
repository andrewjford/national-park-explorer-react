import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import contextWrapper from '../helpers/contextWrapper';
import convertLatLng from '../helpers/mapHelpers';
import { postRating } from '../actions/npsActions';
import { changeRatingInput } from '../actions/userActions';

class ParkMarker extends React.Component {

  handleRatingSubmit = (event) => {
    debugger;
  }

  handleRatingChange = (event) => {
    this.props.changeRatingInput(event.target.value);
  }

  render() {
    const greenMarker = icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    const position = convertLatLng(this.props.park.latLong)
    const LinkWithContext = contextWrapper(Link, this.props.context)

    return <Marker icon={greenMarker} position={position}>
      <Popup>
        <span>
          {this.props.park.fullName}
          <br/>
          Rating: {this.props.park.rating}
          <br/>
          <a href=""
            data-position={position}
            data-parkcode={this.props.park.parkCode}
            onClick={this.props.handleZoomClick}
            >Zoom</a>
          <LinkWithContext to={`/parks/${this.props.park.id}`}>Details</LinkWithContext>
          <br/>
          <form onSubmit={this.handleRatingSubmit}>
            <input type="number"
              value={this.props.user.ratings[this.props.park.parkCode] || 3}
              onChange={this.handleRatingChange}/>
            <input type="submit"/>
          </form>
        </span>
      </Popup>
    </Marker>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeRatingInput: changeRatingInput,
    postRating: postRating
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkMarker);
