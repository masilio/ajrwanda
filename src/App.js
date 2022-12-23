import React from "react";
import "./App.css";
import './index.css'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

import {Header,Footer,WhatIsAJR,Values,Members,Services,Contactus} from './containers'

import {Navbar} from './components'

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