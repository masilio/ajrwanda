import React from 'react'
import './whatAJR.css'
import icons8justice from '../../assets/icons8justice.png';
import icons8Check from '../../assets/icons8Check.png';
import icons8look from '../../assets/icons8-look.png';
import icons8thinking from '../../assets/icons8-thinking.png'
import icons8ambition from '../../assets/icons8-ambition.png'
import Convesion from '../../assets/convesion.jpeg'
const WhatIsAJR = () => {
  return (
    <div className=' about__us'>

      
<div class="card ">
  <img src={Convesion} class="card-img mw-100" alt="..."/>
  <div class="card-img-overlay mw-100">
  <div className=' row about__us-text'>
      <p className='who__weare'><img src={icons8justice} alt =""/> <span className='who__weare-header'>WHO  WE ARE</span></p>
      
      <p className='establishmenr__text'> <span className='org__name'>ART FOR JUSTICE RWANDA</span> is a Non-Governmental Organization registered under Rwandan Law. Art for Justice Rwanda works in partnership with the Government at the central and local level, and with national and international non-profit organizations (NGOs), and Universities. </p>
      <p className='establishmenr__text'>Art for Justice Rwanda’s headquarter is in Kigali/Rwanda. All of us know that the law can be a very powerful tool for enforcing human rights and addressing violations of human rights but the justice system can also be a place where human rights are violated. Art for Justice Rwanda is a global research, policy, advocacy and legal awareness organization with its own sphere in providing digital legal awareness and advocacy to the citizens. Art for Justice Rwanda will guide to explain in plain language how to use the law and its interpretation. </p>
     
     </div>
      
      <div className='org__aim'>
       <div className="row">
        <div className="col">
        <div className="org__vision">
          <p className='vision__header'><img src={icons8look} alt =""/> Vision</p>
        <div className='vision__text'><span><img src={icons8Check} alt=""/></span>The law is a complex and complicated system of knowledge that is more difficult to find and understand than it should be. When we do offer legal education through Art, we try to develop systems that allow users from outside the legal profession to more easily access and understand the laws that govern them.</div>
     </div>

     <div className='mission'>
        <p className='mission__header'><img src={icons8thinking} alt =""/>our missions</p>
          <div className="mission__text">
          <p className='mission__text'>  A.J.R will make sure citizens are capable to:   </p>

<span className='org__mission-list'>
  <ol> <span><img src={icons8Check} alt =""/></span>	recognize when a problem or conflict is a legal conflict and when a legal solution is available; </ol>
  <ol> 	<span><img src={icons8Check} alt =""/></span>know how to take the necessary action to avoid problems and where this is not possible, how to help themselves appropriately;</ol>
  <ol> 	<span><img src={icons8Check} alt =""/></span>know how and where to find information on the law, and be able to find information that is accessible to them,</ol>
  <ol> 	<span><img src={icons8Check} alt =""/></span>know when and how to obtain suitable legal assistance; </ol>
  <ol> 	<span><img src={icons8Check} alt =""/></span>have confidence that the legal system will provide a remedy, and </ol>
  <ol> 	<span><img src={icons8Check} alt =""/></span>understand the process clearly enough to perceive that justice has been done</ol>
</span>

          </div>
        </div>



        </div>

        <div className="col">
        <div className='org__objectives'>

          <p className='objective__header'> <img src={icons8ambition} alt =""/> Our objectives</p>

          <div className="objective__text">
          <span>

<pre>A.J.R aims at: </pre>

<ol> <span><img src={icons8Check} alt =""/></span>	Community education and empowerment. Movies and TV shows will help to create a bigger memory imprint in a viewer’s mind with perfect for information retention.</ol>
<ol> 	<span><img src={icons8Check} alt =""/></span>Digital legal awareness will be also a great benefit for remote areas especially for farmers since they don’t need to read books of laws rather to just seat and listen.</ol>
<ol> 	<span><img src={icons8Check} alt =""/></span>Raising awareness and building capacity. Digital legal awareness is a great hook to the younger generation to be interested. To facilitate a future generation to face the future and its, as yet, unknown problems. </ol>
<ol> 	<span><img src={icons8Check} alt =""/></span>Digital legal awareness will always be available on A.J.R website in case the viewer needs more clarifications or explanations on a specific tutorial. </ol>
<ol> 	<span><img src={icons8Check} alt =""/></span>To stimulate the cognitive processes of thinking, reasoning, problem-solving, decision-making, and creativity. </ol>
<ol> <span><img src={icons8Check} alt =""/></span>To engage viewers with more complex themes, and to facilitate further engagement with the content. </ol>
<ol> <span><img src={icons8Check} alt =""/></span>Strengthening community solidarity and supporting grass-roots advocacy. </ol>
</span> 
          </div>
        
     </div>

        </div>
       </div>
    
    

       

      </div>
     
     </div>
  </div>
</div>

     
  )
}

export default WhatIsAJR