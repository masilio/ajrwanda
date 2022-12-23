/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './contactus.css'

const Contactus = () => {
  return (
    <div className='container-fluid'>

      <div className="contactus">
         <h3> OUR ADDRESS</h3>
         
         <div className="address">
         <p className='location'>Kigali | Rwanda , Nyarugenge ,Gitega</p>
         <p className='email'> ajrwandaa@gmail.com</p>
         <p className='phone'> (+250)  0782097480</p>
         </div>
         
          <div className="socialmedia">
        
<a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-linkedin"></a>
<a href="#" className="fa fa-youtube"></a>
<a href="#" className="fa fa-instagram"></a>

          </div>
      </div>
    </div>
  )
}

export default Contactus