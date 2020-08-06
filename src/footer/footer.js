import React from 'react'
import './footer.css'
import facebook from '../images/icons8-facebook-48.png'
import instagram from '../images/icons8-instagram-48.png'

const Footer = () => {
    return(
        <div className="footer">
                <div className="footer-content">
                    <div></div>
                    <div>
                        <h6><span>&#8203;</span></h6>
                        <h6><span>&#8203;</span></h6>
                        <h3>Kontaktinformasjon</h3>
                        <p>Telefon: 95083210</p>
                        <p>Epost: kriss122830@gmail.com</p>
                    </div>
                    <div className="contact-information">
                        <h6><span>&#8203;</span></h6>
                        <a href="https://www.facebook.com/coachroger80"><img className="logo-image" src={facebook} alt="facebook-icon" /></a>
                        <a href="https://www.instagram.com/coach_roger11/"><img className="logo-image" src={instagram} alt="instagram-icon" /></a>
                    </div> 
                    <div></div>
                </div>
                <div className="footer-bottom">
                    &copy; Kristoffer Ottersen Lindbak
                </div>
        </div>
    );
}        

export default Footer;

/* 
<div className="contact-information">
<h6><span>KONTAKT INFORMASJON</span></h6>
<h6><span>TELEFON: 95083210 || Email: kriss122830@gmail.com</span></h6>
<a href="https://www.facebook.com/coachroger80"><img className="logo-image" src={facebook} alt="facebook-icon" /></a>
<a href="https://www.instagram.com/coach_roger11/"><img className="logo-image" src={instagram} alt="instagram-icon" /></a>
</div> 
<h6><span>&#8203;</span></h6>
*/