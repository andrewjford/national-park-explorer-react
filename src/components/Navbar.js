import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return <nav>
      <NavLink to="/"
      exact
      className="nav-link"
      activeStyle={{
        background: '#1f634c'
      }} >Home</NavLink>

      <NavLink to="/test"
      exact
      className="nav-link"
      activeStyle={{
        background: '#1f634c'
      }} >Test</NavLink>

    </nav>

}

export default Navbar;
