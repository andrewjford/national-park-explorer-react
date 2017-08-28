import React from 'react'
import { connect } from 'react-redux';

import ParkLike from '../components/ParkLike';

class ParkListContainer extends React.Component {

  render(){
    const parks = this.props.parks.map((park) => {
      return <ParkLike
        park={park}
      />
    })

    return <div>
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
