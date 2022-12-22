import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.jpeg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="container-fluid ajr__navbar">
      <div className="ajr__navbar-links">
        <div className="ajr__navbar-links_logo">
          <img src={logo} />
          <span className="header__text">ART FOR JUSTICE RWANDA </span>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
