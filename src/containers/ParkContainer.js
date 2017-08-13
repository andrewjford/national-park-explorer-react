import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPark } from '../actions/npsActions'

class ParkContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPark(this.props.id);
  }

  render() {

    if (this.props.park.name){
      return <div>
        <h1>{this.props.park.fullName}</h1>
        <p>{this.props.park.description}</p>
        <p>{this.props.park.weatherInfo}</p>
        <span>Official Website: <a href={this.props.park.url}>{this.props.park.url}</a></span>
        <br/>
        <span>Directions: <a href={this.props.park.directionsUrl}>{this.props.park.directionsUrl}</a></span>
      </div>
    }
    else {
      return <p>Loading...</p>
    }

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    park: state.nps.currentPark
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPark: fetchPark,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkContainer);
