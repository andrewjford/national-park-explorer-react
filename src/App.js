import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapContainer from './containers/MapContainer';
import ParkContainer from './containers/ParkContainer';
import Navbar from './components/Navbar';
import { fetchParks } from './actions/npsActions';

class App extends Component {

  componentDidMount() {
    this.props.fetchParks();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={MapContainer} />
          <Route exact path="/test" component={ParkContainer} />
          <Route exact path="/parks/:id" component={ParkContainer} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchParks: fetchParks,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
