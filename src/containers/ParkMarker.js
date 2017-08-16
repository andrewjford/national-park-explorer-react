import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import contextWrapper from '../helpers/contextWrapper';
import convertLatLng from '../helpers/mapHelpers';
import { postRating } from '../actions/npsActions';
import { changeRatingInput, flagSubmitted } from '../actions/userActions';
import RatingForm from '../components/RatingForm';

class ParkMarker extends React.Component {

  componentDidMount() {
    this.props.changeRatingInput(this.props.park.parkCode, 3);
  }

  handleRatingSubmit = (event) => {
    event.preventDefault();
    this.props.postRating(this.props.park.id, this.props.user.ratings[this.props.park.parkCode]);
    this.props.flagSubmitted(this.props.park.parkCode);
  }

  handleRatingChange = (event) => {
    this.props.changeRatingInput(this.props.park.parkCode, event.target.value);
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
          Rating: {this.props.park.rating.toFixed(2)}
          <br/>
          <RatingForm
            ratingInput={this.props.user.ratings[this.props.park.parkCode]}
            handleRatingChange={this.handleRatingChange}
            handleRatingSubmit={this.handleRatingSubmit}
            submitted={this.props.user.submitted.includes(this.props.park.parkCode)}
          />
          <a href=""
            data-position={position}
            data-parkcode={this.props.park.parkCode}
            onClick={this.props.handleZoomClick}
            >Zoom</a>
          <LinkWithContext to={`/parks/${this.props.park.id}`}>Details</LinkWithContext>
          <br/>
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
    postRating: postRating,
    flagSubmitted: flagSubmitted,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkMarker);
