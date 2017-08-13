import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPark } from '../actions/npsActions';
import Park from '../components/Park'

class ParkContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPark(this.props.id);
  }

  render() {

    if (this.props.park.name){
      return <Park park={this.props.park} />
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
