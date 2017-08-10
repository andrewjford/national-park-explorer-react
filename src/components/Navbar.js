import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return <nav>
      <NavLink to="/"
      exact
      className="nav-link"
      activeStyle={{
        background: 'darkblue'
      }} >Home</NavLink>

      <NavLink to="/test"
      exact
      className="nav-link"
      activeStyle={{
        background: 'darkblue'
      }} >Test</NavLink>

    </nav>

}

export default Navbar;
