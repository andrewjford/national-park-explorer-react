import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import convertLatLng from '../helpers/mapHelpers';
import { saveMapPosition } from '../actions/mapActions';
import { fetchVisitorcenters } from '../actions/npsActions';

class ParkItem extends React.Component {

  handleLink = () => {
    //set map position
    const position = convertLatLng(this.props.park.latLong);
    this.props.saveMapPosition(position, 9);
    //load visitor centers
    this.props.fetchVisitorcenters(this.props.park.parkCode);
  }

  render(){

    return <li>
      <Link onClick={this.handleLink} to={`/`}>{this.props.park.fullName}</Link>
    </li>
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveMapPosition: saveMapPosition,
    fetchVisitorcenters: fetchVisitorcenters
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ParkItem);
