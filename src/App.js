import React from "react";
import "./App.css";
import './index.css'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

import {Header,Footer,WhatIsAJR,Values,Members,Team,Services,Involved,Partners,Contactus, Videos} from './containers'

import {Navbar,CTA,Brand,Feature,Article} from './components'

function App() {
  
  return (
    <div className="App">
     <div className="container-fluid">

      <Navbar/>
      <Header/>
      
      </div>
      <div className="container-fluid">
      <WhatIsAJR/>
      <Values />
      <Members/>
      <Services/>
      
      <Contactus/>
    
      <Footer/>
      </div>
    </div>
  );
}

export default App;