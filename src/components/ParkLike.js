import React from 'react'

class ParkLike extends React.Component {
  constructor(){
    super();

    this.state = {
      likes: 0
    }
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(event) {
    let num = this.state.likes;
    this.setState({
      likes: num+1
    })
  }

  apiCall = () => {
    console.log('a')
    fetch(process.env.REACT_APP_API_URL + 'parks')
      .then(res => {
        console.log('b')
        return res.json()
      })
      .then(data => console.log(data, 'c'))

    console.log('d')
  }

  render(){
    return <li>
      {this.props.park.fullName}
      <button onClick={this.handleLike}>Like</button>
      <button onClick={this.apiCall}>Call</button>
      {this.state.likes}
    </li>
  }
}

export default ParkLike;
