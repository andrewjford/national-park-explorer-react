import React from 'react'
import { connect } from 'react-redux';

import ParkItem from '../components/ParkItem';

class ParkListContainer extends React.Component {

  render(){
    const parks = this.props.parks.map((park, index) => {
      return <ParkItem
        key={index}
        park={park}
      />
    })

    return <div className="parklist-container">
      <ul>
        {parks}
      </ul>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.nps.parks,
  }
}

export default connect(mapStateToProps)(ParkListContainer);
