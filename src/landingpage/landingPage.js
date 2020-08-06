import React from 'react'
import './styles.css'

//const firebase = require("firebase");

class LandingPageComponent extends React.Component {
    render() {
        return(
            <div className={'mainLandingPage'}>
                <div className={'landingPage'}>
                    <section className={'landingPageSection1'}></section>
                    <section><h1>Velkommen</h1></section>
                </div>
            </div>
        );
    }
}

export default LandingPageComponent;