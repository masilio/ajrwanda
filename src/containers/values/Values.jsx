import React from 'react'
import BrandingImage from '../../assets/branding-image.jpeg'

import './values.css'
const Values = () => {
  return (
    <div className=' ong__values'>

<div class="card">
  <img src={BrandingImage} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    
  <p className='org__values'>OUR VALUES</p>
       <div className='values__slog'> Our community partners guide us and our values drive us.</div>
        <div class="row">
        
    <div class="col">
       <div className="card">
       <div className="card-body">
        <h5 className="card-title">COMMUNITY</h5>
        <p className="card-text">We are committed to a positive environment in which everyone may experience a sense of belonging and worth. We honor relationships and take responsibility for fostering trust, respect, and good will. We share stories about our heritage, calling, and vulnerabilities.</p>
    </div>
       </div>
     
      <div className="card">
      <div class="card-body">
        <h5 class="card-title">EMPOWERMENT</h5>
        <p class="card-text">We are a strength-based organization. We support, trust, and empower employees to further the shared mission of A.J.R. We are committed to developing confidence of every employee's individual talents and capabilities..</p>
    
  </div>
      </div>
   
      <div className="card">
      <div class="card-body">
        <h5 class="card-title">INTEGRITY</h5>
        <p class="card-text">We are trustworthy. We are reliable, authentic, and loyal. We do what we say we will do. We have the courage to do the right thing. We welcome accountability, honesty, and transparency..</p>

  </div>
      </div>

      <div className="card">

      <div class="card-body">
        <h5 class="card-title">RESPECT</h5>
        <p class="card-text">We honor the intrinsic dignity, autonomy, and worth of each person. We treat others the way we would want to be treated. We are considerate of each other's feelings, values, and points of view..</p>
        
      </div>
      </div>
  </div>
  <div class="col">
    
      <div className="card">
      <div class="card-body">
        <h5 class="card-title">SERVICE</h5>
        <p class="card-text">We choose to serve first in our organization and our community. Service is a force that motivates every member of our organization.  We are committed to serving those we lead as well as those we follow. In the spirit of service.</p>
  </div>
      </div>
  
     <div className="card">

     <div class="card-body">
        <h5 class="card-title">EXCELLENCE</h5>
        <p class="card-text">We are committed to pursuing the highest possible standards at every level of the organization. We strive to become the benchmark through innovation and initiative. We are committed to putting forth our personal and .</p>
  </div>
     </div>

      <div className="card">

      <div class="card-body">
        <h5 class="card-title">TEAMWORK</h5>
        <p class="card-text">We work as a team, achieving more collectively than individually. We are a cohesive unit setting aside our personal agendas and working toward our shared mission. We are committed to creating synergy by encouraging each other and  .</p>
        
      </div>
      </div>
    </div>
    </div>
  </div>
</div>
       

    </div>
  
  )
}

export default Values