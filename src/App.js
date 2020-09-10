import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import OmMegComponent from './components/om-meg/omMeg'
import BildeGalleriComponent from './components/bildegalleri/bildegalleri'
import Coaching from './components/coaching/coaching'
import FellesInfo from './components/fellesinfo/fellesinfo'
import MatTrening from './components/mat&trening/mat&trening'
import LoginComponent from './components/login/login'
import SignupComponent from './components/signup/signup'
import DashboardComponent from './components/dashboard/dashboard'
import AdminPanel from './components/adminpanel/adminpanel'
import './App.css'

const firebase = require("firebase");

function App() {
  return (
    <div className="Page-container">
        <header className="Navbar-section"><Navbar /></header>
        <div className="pageSection">
          <Route exact path={"/"} component={OmMegComponent}/>
          <Route exact path={"/bildegalleri"} component={BildeGalleriComponent} />
          <Route exact path={"/coaching"} component={Coaching}/>
          <Route exact path={"/login"} component={LoginComponent}/>
          <Route exact path={"/signup"} component={SignupComponent}/>
          <Route exact path={"/fellesinfo"} component={FellesInfo}/>
          <Route exact path={"/mat&trening"} component={MatTrening}/>
          <Route exact path={"/dashboard"} component={DashboardComponent}/>
          <Route exact path={"/adminpanel"} component={AdminPanel}/>    
        </div>
    </div>
  );
}

export default App;
