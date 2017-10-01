import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component {

  handleLoginClick = (event) => {
    event.preventDefault();
    alert('keks');
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

        <a onClick={this.handleLoginClick}
          href=""
          className="nav-link"
        >Login</a>
      </nav>
  }

}

export default Navbar;
