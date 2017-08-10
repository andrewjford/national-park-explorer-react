import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import MapContainer from './containers/MapContainer';
import ParkContainer from './containers/ParkContainer';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <h1>National Park Explorer</h1>
          <Route exact path="/" component={MapContainer} />
          <Route exact path="/test" component={ParkContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
