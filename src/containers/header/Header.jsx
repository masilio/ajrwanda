import React from 'react';

import Frontsection from '../../assets/frontsection.jpeg';

import './header.css';

const Header = () => (
  <div className='ajr__section'>
    <div className="ajr__header-content">

    <div class="card text-white">
  <img src={Frontsection} class="card-img" alt="..."/>
  <div class="card-img-overlay ajr__header-content-slog">
    <h5 class="card-title">Our Mission is to Help You.</h5>
    <br/>
    
    <p class="card-text">Where you see wrong or inequality or injustice,  speak it out,  because this is your country.</p>
    <p className='demo_slos'> This is your development. </p>
   
  </div>
</div>
   </div>
  
   
   </div>
);

export default Header