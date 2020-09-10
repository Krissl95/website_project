import React from 'react'
import './footer.css'
import facebook from '../../images/icons8-facebook-48.png'
import instagram from '../../images/icons8-instagram-48.png'

export default function Footer() {
    return(
        <div className="footer">
                <div className="footer-content">
                    <div className="contact-information">
                        <div>
                            <h3>Kontaktinformasjon</h3>
                            <br />
                            <p>Telefon: 90080101</p>
                            <br />
                            <p>Epost: roger-holsether@gmail.com</p>
                        </div>
                        <div>
                            <br />
                            <a href="https://www.facebook.com/coachroger80"><img className="logo-image" src={facebook} alt="facebook-icon" /></a>
                            <a href="https://www.instagram.com/coach_roger11/"><img className="logo-image" src={instagram} alt="instagram-icon" /></a>
                        </div>
                    </div> 
                </div>
                <div className="footer-bottom">
                    &copy; Kristoffer Ottersen Lindbak
                </div>
        </div>
    );
}        

