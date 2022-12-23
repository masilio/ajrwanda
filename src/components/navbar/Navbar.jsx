import React from 'react';
import logo from '../../assets/logo.jpeg';
import './navbar.css';

const Navbar = () => {

  return (
    <div className="container-fluid ajr__navbar">
      <div className="ajr__navbar-links">
        <div className="ajr__navbar-links_logo">
          <img src={logo}  alt=""/>
          <span className="header__text">ART FOR JUSTICE RWANDA </span>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
