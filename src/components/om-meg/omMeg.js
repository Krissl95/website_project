import React from 'react'
import Galleri from '../bildegalleri/bildegalleri'
import Footer from '../footer/footer'

import './styles.css'

export default function OmMeg() {
    return(
        <main className="omMegContainer">
            <div className="section1">
                
            </div>
            <div className="section2">
                <div className="section2Innerdiv">
                    <h1 className="backgroundHeader">Bakgrunn</h1>
                    <p className="backgroundParagraf">Som en aktiv og sosial gutt ble jeg interessert i ulike idretter i ung alder, og det som motiverte meg mest var uten tvil mestringsfølelsen de ulike idrettene gav meg. Dette har ført til mange aktive år både som utøver og trener i idretter som fotball, ishockey, basketball og snowboard. Gjennom idretten ble jeg introdusert for styrketrening som 13 åring og med en gang ble jeg fasinert over hvordan man kunne forme kroppen og bli sterkere med målrettet arbeid over litt tid. Nå med snart 30 år innen idrett og styrketrening har jeg opparbeidet meg mye erfaring om hvordan man skal trene for å nå ulike målsetninger.</p>
                </div>
            </div>
            <div className="section3">
                    <div className="section3Innerdiv">
                        <h1 className="kompetanseHeader">Kompetanse</h1>
                        <p>&rsaquo; Bachelorgrad i Idrettsvitenskap med fordypning i fysiologi</p>
                        <p>&rsaquo; Ulike kostholdskurs</p>
                        <p>&rsaquo; PT utdanning</p>
                        <p>&rsaquo; Trener 1,2,3 gjennom Norges Ishockey Forbund og Olympiatoppen</p>
                        <p>&rsaquo; Aktivitetsleder kurs gjennom Norges Fotball Forbund </p>
                        <p>&rsaquo; Trener 1 i Curpng gjennom Norges Curpngforbund</p>
                        <p>&rsaquo; Kurs i slyngetrening</p>
                        <p>&rsaquo; Kurs i forebygging og rehabiptering av skader</p>
                        <p>&rsaquo; IFBB Sertifisert Coach</p>
                    </div>
            </div>
            <div className="section4">
                <Galleri />
                <Footer />
            </div> 
        </main>
    )
}

