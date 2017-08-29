import React from 'react'

class ParkItem extends React.Component {

  render(){
    return <li>
      {this.props.park.fullName}
    </li>
  }
}

export default ParkItem;
