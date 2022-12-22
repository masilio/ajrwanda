import React from 'react'
import './services.css'

import humandevelopmentpic from '../../assets/human-development-pic.jpeg'
import legalrightpic from '../../assets/legal-right-pic.jpeg'
import legalassistancepic from '../../assets/legal-assistance-pic.jpeg'
import BradingImage from '../../assets/bradingImg.jpeg'
import spiralImagLaw from '../../assets/spiralImagLaw.jpeg'
const Services = () => {
  return (
    <div className='container-fluid'>
      <div className="org__services">
        <p className='services__header'>WHAT WE DO</p>

        <div className="service row">
          <div className="col-md-7 ">
            <div className="card-body">
              <h5 className="card-title"> 	DIGITAL LEGAL AWARENESS AND ADVOCACY FOR EQUITABLE JUSTICE</h5>
              <p className="card-text">
                Digital Legal Awareness and Advocacy empower people to demand justice, accountability and effective remedies at all levels.
                Legal needs always stand to become crisis oriented because their ignorance prevents them from anticipating legal troubles
                and approaching a lawyer for consultation and advice in time.
                This magnifies the impact of their legal troubles and
                difficulties when they come.
                Without literacy people can get intimidated and alienated from law. This may evolve into a situation
                which results in people coming into conflict with the law,
                or being unable to obtain help from it. Courts have acknowledged the barrier raised by a lack of literacy to asserting guaranteed rights effectively.
              </p>

              <p className='card-text'>

                Low literacy may block people’s access to justice. At times, literacy requirements have been used to block access to rights and benefits.
                It is in this regards that Art for Justice Rwanda as the only one non – governmental organization providing artistic legal educational to citizens of the community.
              </p>
              <p>Art for Justice Rwanda will be owning a TV Show & Drama called Judge Oona written by the founder to educate people about different issues arising from a lack of knowledge of laws.</p>
            </div>
          </div>
        
        <div className="col-md-5">
          <img src={legalrightpic} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="service row">

        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title"> 	LEGAL ASSISTANCE & SOCIO-PSYCHOLOGY ASSISTANCE</h5>
            <p className="card-text">we provide legal assistance services to the public, with a particular focus on the needs of people who are economically and/or socially disadvantaged. Legal and psychological support will facilitate access to justice for disadvantaged people in Rwanda through the delivery of legal assistance services. .</p>
            <p>The legal support provides legal assistance services to the public, with a particular focus on the needs of people who are economically and/or socially disadvantaged. Legal and psychological support will facilitate access to justice for disadvantaged people in Rwanda through the delivery of legal assistance services. </p>
            <ul>

              <li>People experiencing Financial Disadvantage</li>
              <li>People experiencing, or at risk of family violence</li>
              <li>Children and young people’ </li>
              <li>Older people (aged over 70) </li>
              <li>People in rural or remote areas </li>
              <li>People with disabilities</li>
              <li>People with HIV/AIDS</li>
              <li>	Prisoners’ Rights</li>
              <li>Corruption</li>
              <li>Patients’ Rights</li>
              <li>Drug use</li>
            </ul>
          </div>
        </div>
        <div className="col-md-5 ">
          <img src={BradingImage} className="card-img-top" alt="..." />
        </div>
      </div>

      <div className="service row">

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">LEGAL RESEARCH & HUMAN RIGHTS DEVELOPMENT</h5>
            <p className="card-text">

              Once we spot a problematic trend or persistent violation of rights, we look to launch detailed research to find out exactly what is going on.
              This research then often defines or feeds into advocacy work and broader campaigns, both by us, and by other interested partners.
            </p>
            <p className="card-text">
              Some of our current research and monitoring work, which we regularly add to and update, and you can also find previous research projects
              and reports in this section of our site. To get involved in any aspect of our research work, please email us.
              <p />
              We promote forms of advocacy, letter writing, media campaigns etc . Legal advocacy is using the law and its tools (eg courts) is a potent tool for change. To help human rights campaigners understand and use legal advocacy, as well as ensure the human rights are respected, and easy access to justice.

              <p className="card-text">
                Some human rights issues are reasonably clear, while others are not. With our policy work we attempt to address some of the complex
                and otherwise ignored issues. At times this means being controversial,
                which we will never shy away from if it means human rights will be promoted and protected.
              </p>
              <p className="card-text">
                Our focus areas are based on trends we spot in our monitoring work, including patterns of violations and gaps in human rights
                advocacy. We then decide what action to take based on these criteria.

              </p>
              <p className="card-text">
                We don’t know the answer to all the problems, so we use our policy work to think, write and debate to help develop our ideas.
                Sometimes this work evolves further into a research project or advocacy work, while at others it is more about raising questions
                and bringing visibility to an issue.
              </p>
              <br />

              <ul>
                <li>Health and Rights</li>
                <li>Empowering Service Delivery</li>
                <li>The Rule of Law </li>
                <li>Combating Corruption</li>
                <li>Medical Malpractice</li>


              </ul>
            </p>

          </div>
        </div>
        <div className="col-md-2">
          <img src={spiralImagLaw} className="" alt="..." />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services