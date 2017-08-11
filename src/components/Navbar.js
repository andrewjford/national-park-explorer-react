import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return <nav>
      <NavLink to="/"
      exact
      className="nav-link"
      activeStyle={{
        background: '#385f05'
      }} >Home</NavLink>

      <NavLink to="/test"
      exact
      className="nav-link"
      activeStyle={{
        background: '#385f05'
      }} >Test</NavLink>

    </nav>

}

export default Navbar;
