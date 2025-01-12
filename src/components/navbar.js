import * as React from 'react';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

// markup
const Navbar = () => {
  return (
    <main className='navbar'>
      <NavLink activeClassName='active-link' className='nav-link' exact to='/'>
        home
      </NavLink>
      <NavLink
        activeClassName='active-link'
        className='nav-link'
        exact
        to='/about'
      >
        about
      </NavLink>

      <NavLink
        activeClassName='active-link'
        className='nav-design'
        exact
        to='/design'
      >
        design
      </NavLink>
      <a href='https://ilyues.me/' target='_blank' className='nav-link'>
        illustrate
      </a>
      <NavLink
        activeClassName='active-link'
        className='nav-code'
        exact
        to='/code'
      >
        code
      </NavLink>

      {/* <a
        href='https://www.inprnt.com/gallery/ilyues/'
        target='_blank'
        className='nav-link'
      >
        print shop
      </a> */}
    </main>
  );
};

export default Navbar;
