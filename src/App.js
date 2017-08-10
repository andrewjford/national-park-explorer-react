import React, { Component } from 'react';
import './App.css';

import MapContainer from './containers/MapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>National Park Explorer</h1>
        <MapContainer />
      </div>
    );
  }
}

export default App;
