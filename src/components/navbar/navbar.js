import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const firebase = require("firebase");

export default function Navbar() {
    // React Hooks - useState / useEffect
    const [isOpen, setIsOpen] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [userName, setUserName] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(_usr => {
            if(!_usr) {
                setLoggedIn(false)
            } else if(_usr.email === 'kriss122830@gmail.com'){
                setUserName(true)
                setLoggedIn(true)
            } else {
                setUserName(false)
                setLoggedIn(true)
            }
        })
    })

    // Logg ut funksjon
    function signOut() {
        firebase.auth().signOut()
        navToggle();
    }

    function navToggle() {
        const nav = document.querySelector('ul');
        const navLinks = document.querySelectorAll('.navlinks');
        
        // Toggle Navbar
        nav.classList.toggle('nav-active');

        setIsOpen(prevState => !prevState)
    
        //Anitmate Navlinks
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.5}s`;
            }
        })
    }
    
    return(
        <nav className="navigationBar">
            <h2 className="navbarHeader">Roger Holsether</h2>
            <ul className={ loggedIn ? "ulNavbar" : "mobileUlNavbar" }>
                <li onClick={() => navToggle()} className={ !loggedIn ? "navlinks" : "hideNav" }><NavLink className="link" activeClassName="active" exact to="/">Om meg</NavLink></li>
                <li onClick={() => navToggle()} className={ !loggedIn ? "navlinks" : "hideNav" }><NavLink className="link" activeClassName="active" exact to="/coaching">Coaching</NavLink></li>
                <li onClick={() => navToggle()} className={ !loggedIn ? "navlinks" : "hideNav" }><NavLink className="link" activeClassName="active" exact to="/login">Login</NavLink></li>
                <li onClick={() => navToggle()} className={ loggedIn ? "navlinks" : "hideNav" }><NavLink className="link" activeClassName="active" exact to="/fellesinfo">Felles info</NavLink></li>
                {
                    userName ? 
                    <li onClick={() => navToggle()} className={ loggedIn ? "navlinks" : "hideNav" }><NavLink className="link" activeClassName="active" exact to="/adminpanel">AdminPanel</NavLink></li>
                    :
                    <li onClick={() => navToggle()} className={ loggedIn ? "navlinks" : "hideNav" }><NavLink className="link" activeClassName="active" exact to="/mat&trening">Mat/Trening</NavLink></li>
                }
                {
                    loggedIn && userName ? <li onClick={() => navToggle()} className={ loggedIn ? "navlinks" : "hideNav" }><NavLink className="link" activeClassName="active" exact to="/bildegalleri">Galleri</NavLink></li>
                    :
                    null
                }
                <li onClick={() => navToggle()} className={ loggedIn ? "navlinks" : "hideNav" }><NavLink className="link" activeClassName="active" exact to="/dashboard">Chat</NavLink></li>
                <li onClick={() => signOut()} className={ loggedIn ? 'navlinks':'hideNav'}><NavLink className="link" activeClassName="active" exact to="/login">Logg Ut</NavLink></li>
            </ul>
            <div className="burgerMenu" onClick={() => navToggle()}>
                <div className={isOpen ? 'line1':'undefined'}></div>
                <div className={isOpen ? 'line2':'undefined'}></div>
                <div className={isOpen ? 'line3':'undefined'}></div>
            </div>
        </nav>
        /*
        <div className="appContainer">
            <h2 id="navbarHeader">Roger Holsether</h2>
            <ul onClick={() => handleClick()} className={isOpen ? 'showNav':'undefined'}>
                <li className={loggedIn ? 'hideNav':'showNav'}><NavLink activeClassName="selected" className="navLink" exact to="/">Om meg</NavLink></li>
                <li className={loggedIn ? 'hideNav':'showNav'}><NavLink activeClassName="selected" exact to="/coaching">Coaching</NavLink></li>
                <li className={loggedIn ? 'hideNav':'showNav'}><NavLink activeClassName="selected" exact to="/login">Log In</NavLink></li>
                <li className={loggedIn ? 'showNav':'hideNav'}><NavLink activeClassName="selected" exact to="/fellesinfo">Felles Informasjon</NavLink></li>
                {
                userName ?  
                <li className={loggedIn ? 'showNav':'hideNav'}><NavLink activeClassName="selected" exact to="/adminpanel">Adminpanel</NavLink></li> 
                :
                <li className={loggedIn ? 'showNav':'hideNav'}><NavLink activeClassName="selected" exact to="/mat&trening">Matplan/Treningsplan</NavLink></li>
                }
                <li className={loggedIn && userName ? 'showNav':'hideNav'}><NavLink activeClassName="selected" exact to="/bildegalleri">Galleri</NavLink></li>
                <li className={loggedIn ? 'showNav':'hideNav'}><NavLink activeClassName="selected" exact to="/dashboard">Chat</NavLink></li>
                <li onClick={() => signOut()} className={loggedIn ? 'showNav':'hideNav'}><NavLink activeClassName="selected" exact to="/login">Logg Ut</NavLink></li>
            </ul>
            <div className="burgerMenu" onClick={() => handleClick()}>
                <div className={isOpen ? 'line1':'undefined'}></div>
                <div className={isOpen ? 'line2':'undefined'}></div>
                <div className={isOpen ? 'line3':'undefined'}></div>
            </div>
        </div> 
        */
    )
}
