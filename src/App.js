import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapContainer from './containers/MapContainer';
import ParkContainer from './containers/ParkContainer';
import Navbar from './components/Navbar';
import { fetchParks } from './actions/npsActions';
import About from './components/About';

class App extends Component {

  componentDidMount() {
    this.props.fetchParks();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Route exact path="/" component={MapContainer} />
            <Route exact path="/parks" component={MapContainer} />
            <Route exact path="/parks/:id" component={ParkContainer} />
            <Route exact path="/about" component={About} />
          </main>
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
