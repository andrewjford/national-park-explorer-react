import React from 'react'
import { connect } from 'react-redux';

import ParkItem from '../components/ParkItem';

class ParkListContainer extends React.Component {

  render(){
    const sorted_parks = this.props.parks.sort((a,b) => {
      if(a.fullName < b.fullName){
        return -1;
      }
      else{
        return 1;
      }
    })
    const parks = sorted_parks.map((park, index) => {
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
