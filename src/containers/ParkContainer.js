import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPark } from '../actions/npsActions';
import Park from '../components/Park';
import Loading from '../components/Loading';

class ParkContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPark(this.props.id);
  }

  render() {

    if (this.props.park.db_id === this.props.id){
      return <Park park={this.props.park} />
    }
    else {
      if(this.props.park.errors){
        return <p className="park-error">The National Park Service Data API appears to be down. Please try again later.</p>
      }
      else {
        return <Loading loaded={false} />
      }
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
