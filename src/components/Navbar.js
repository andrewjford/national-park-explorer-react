import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openLoginWindow } from '../actions/modalActions';

class Navbar extends React.Component {

  handleLoginClick = (event) => {
    this.props.openLoginWindow();
  }

  render() {
    return <nav>
        <NavLink to="/"
        exact
        className="nav-link"
        activeStyle={{
          background: '#1f634c'
        }} >National Park Explorer</NavLink>

        <NavLink to="/parks"
        exact
        className="nav-link"
        activeStyle={{
          background: '#1f634c'
        }} >Parks</NavLink>

        <NavLink to="/about"
        className="nav-link"
        activeStyle={{
          background: '#1f634c'
        }}
        >About</NavLink>

        <Link
          onClick={this.handleLoginClick}
          className="nav-link"
          to={`/`}>Login</Link>

      </nav>
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openLoginWindow: openLoginWindow,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Navbar);
