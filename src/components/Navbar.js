import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
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
    </nav>

}

export default Navbar;
