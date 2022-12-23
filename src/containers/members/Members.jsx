import React from 'react'
import './members.css'
import CeoPic from '../../assets/ceoPic.jpeg'
import DirectorOfAdministration from '../../assets/DirectorOf Administration.jpg'
import ArtAcountant from '../../assets/art-accountant.jpg'
import ArtCoordinator from '../../assets/ArtCordinator.jpeg'
import ArtMonitoring from '../../assets/ArtMonitoring.jpeg'
import ArtITDirector from '../../assets/ArtITDirector.jpeg'
import ArtProcurement from '../../assets/ArtProcurement.jpeg'
const Members = () => {
  return (
    <div className='container-fluid'>
        
            <div className="org__members">
            <p className='team__header'>OUR FOUNDER / OUR TEAM</p>

            <div className="CoFounder">
            <section>
  <div class="containe py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card" style={{"border-radius": "10px"}}>
          <div class="card-body p-4">
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img src={CeoPic} className="img-fluid" style={{'width': '180px', 'border-radius':'10px' }} alt=""/>
              </div>
              <div class="flex-grow-2 ms-3">
                <h5 class="mb-1">Rehema BUTOYI </h5>
                <p class="mb-2 pb-1" style={{"color": "#2b2a2a"}}>
                Rehema BUTOYI a Jurist, a University of Handong International Law School & Regent Graduate, earned a J.D. from South Korea and USA.
Rehema always dreamt to be a judge or a journalist as symbols of freedom and wit. 
She also served in different countries as a committee member of the Diaspora, and the President of the Korean Government Scholarship Alumni and Korean Government Envoy.  
</p>
<p>
In 2014, She volunteered at UNESCO and interned at the Center for Global Justice at Regent and won a Human Rights Legal Memo award. 
2017 when she came to her beautiful home country, she knew it was time for her to pursue a legal career.
  </p> 
  <p>           
She served as a part-time assistant lecturer at Keimyung University in South Korea, Former Head of the Department of Law School at Université Libre De Kigali (ULK), and is presently, a part-time Lecture at Université Libre De Kigali (ULK) and the University of Kigali (UoK)
From 2020, she was involved in legal research and reform of the laws of Rwanda.</p>

<p>
She has advised many business investors on different legal matters. Currently a legal advisor in infrastructure matters.
Coupled with experience and passion in Human Rights activities, led her to spend her weekend precious time writing scripts for the upcoming TV Show and Drama “JUDGE Oona” as part of Digital Legal Awareness and Advocacy for Equitable Justice.
                
</p>

                <p>
                Rehema speaks Kinyarwanda, has an excellent command of English, French, and Swahili, and has a working knowledge of the Korean Language.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
            </div>
             <div className="container">

             <div className="officials">
              <div className="official">
  
    <img src={ArtCoordinator} class="rounded-circle" style={{"width": "300px"}} alt =""/>
    <h5 class="mb-2">Diane MUTETAYIRE</h5>
    <p class="text-muted">Project Coordintor </p>
    
  </div>

  <div class="official">
    <img src={DirectorOfAdministration} className="rounded-circle" style={{"width": "300px"}} alt =""/>
    
      <h5 className="mb-2">NIYONSENGA Fatm</h5>
      <p class="text-muted">Director of Administration & Finance</p>
  </div>

  <div class="official">
    <img src={ArtMonitoring} class="rounded-circle" style={{"width": "300px"}} alt =""/>
    <h5 class="mb-2">Jean De Dieu BIZIMANA</h5>
      <p class="text-muted">Monitoring and Evaluation</p>
    </div>

     <div className="official">
             
    <img src={ArtITDirector} class="rounded-circle" style={{"width": "300px"}} alt =""/>
    <h5 class="mb-2">Felix NSHIMIYIMANA</h5>
      <p class="text-muted">IT Director</p>
  </div>

<div class="official">
    <img src={ArtProcurement} className="rounded-circle" style={{"width": "300px"}} alt =""/>
    
    <h5 class="mb-2">Clarisse UWAMAHORO</h5>
      <p class="text-muted">Procurement Specialist</p>
  </div>
<div class="official">
<img src={ArtAcountant} class="rounded-circle" style={{"width": "300px"}} alt =""/>
    <h5 class="mb-2">DjAFal HABIMANA</h5>
      <p class="text-muted">Accountant and Logistics</p>
  </div>
  </div>
             </div>
        
    </div>

</div>

          
  )
}

export default Members