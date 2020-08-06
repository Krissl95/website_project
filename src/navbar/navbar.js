import React from 'react'
import { Route, Link } from 'react-router-dom'
import LandingPageComponent from '../landingpage/landingPage'
import OmMegComponent from '../om-meg/omMeg'
import BildeGalleriComponent from '../bildegalleri/bildegalleri'
import Coaching from '../coaching/coaching'
import Trening from '../trening/trening'
import Kosthold from '../kosthold/kosthold'
import FellesInfo from '../fellesinfo/fellesinfo'
import MatTrening from '../mat&trening/mat&trening'
import LoginComponent from '../login/login'
import SignupComponent from '../signup/signup'
import DashboardComponent from '../dashboard/dashboard'
import AdminPanel from '../adminpanel/adminpanel'
import './Navbar.css'


const firebase = require("firebase");

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isOpen: false,
            loggedIn: false,
            userName: false,
            adminok: 'Hello'
        }
    }
    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return(
            <div>
                <div className="App-container">
                <header className="App-header">
                    <h1>Roger Holsether</h1>
                </header>
                <div className="burger" onClick={this.handleClick}>
                        <div className={this.state.isOpen ? 'line1':'undefined'}></div>
                        <div className={this.state.isOpen ? 'line2':'undefined'}></div>
                        <div className={this.state.isOpen ? 'line3':'undefined'}></div>
                </div>
                <div className="App-navbar">
                    <ul onClick={this.handleClick} className={this.state.isOpen ? 'showNav':'undefined'}>
                        <li className={this.state.loggedIn ? 'hideNav':'showNav'}><Link to="/">Hjem</Link></li>
                        <li className={this.state.loggedIn ? 'hideNav':'showNav'}><Link to="/om-meg">Om meg</Link></li>
                        <li className={this.state.loggedIn ? 'hideNav':'showNav'}><Link to="/bildegalleri">Galleri</Link></li>
                        <li className={this.state.loggedIn ? 'hideNav':'showNav'}><Link to="/coaching">Coaching</Link></li>
                        <li className={this.state.loggedIn ? 'hideNav':'showNav'}><Link to="/trening">Trening</Link></li>
                        <li className={this.state.loggedIn ? 'hideNav':'showNav'}><Link to="/kosthold">Kosthold</Link></li>
                        <li className={this.state.loggedIn ? 'hideNav':'showNav'}><Link to="/login">Log In</Link></li>
                        <li className={this.state.loggedIn ? 'showNav':'hideNav'}><Link to="/fellesinfo">Felles Informasjon</Link></li>
                        {
                          this.state.userName ?  
                          <li className={this.state.loggedIn ? 'showNav':'hideNav'}><Link to="/adminpanel">Adminpanel</Link></li> 
                          :
                          <li className={this.state.loggedIn ? 'showNav':'hideNav'}><Link to="/mat&trening">Matplan/Treningsplan</Link></li>
                        }
                        <li className={this.state.loggedIn ? 'showNav':'hideNav'}><Link to="/bildegalleri">Galleri</Link></li>
                        <li className={this.state.loggedIn ? 'showNav':'hideNav'}><Link to="/dashboard">Chat</Link></li>
                        <li onClick={this.signOut} className={this.state.loggedIn ? 'showNav':'hideNav'}><Link to="/login">Log Ut</Link></li>
                    </ul>
                    
                </div>
                </div>
                <div className="App-intro">
                    <Route exact path={"/"} component={LandingPageComponent}/>
                    <Route exact path={"/om-meg"} component={OmMegComponent}/>
                    <Route exact path={"/bildegalleri"} component={BildeGalleriComponent} />
                    <Route exact path={"/coaching"} component={Coaching}/>
                    <Route exact path={"/trening"} component={Trening}/>
                    <Route exact path={"/kosthold"} component={Kosthold}/>
                    <Route exact path={"/fellesinfo"} component={FellesInfo}/>
                    <Route exact path={"/mat&trening"} component={MatTrening}/>
                    <Route exact path={"/login"} component={LoginComponent}/>
                    <Route exact path={"/signup"} component={SignupComponent}/>
                    <Route exact path={"/dashboard"} component={DashboardComponent}/>
                    <Route exact path={"/adminpanel"} component={AdminPanel}/>
                </div>
            </div>
        );
    }

    signOut = () => firebase.auth().signOut();

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(_usr => {
            if(!_usr) {
                this.setState({
                    loggedIn: false
                })
            } else if(_usr.email === 'kriss122830@gmail.com'){
                this.setState({
                    userName: true,
                    loggedIn: true
                })
            } else {
                this.setState({
                    userName: false,
                    loggedIn: true
                }) 
            }
        })
    }

}

export default Navbar;