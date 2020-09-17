import React from 'react'
import Galleri from '../bildegalleri/bildegalleri'
import Footer from '../footer/footer'

import './styles.css'

export default function OmMeg() {
    return(
        <main className="omMegContainer">
            <section className="introSection">
                <div className="omMegIntroSection">
                    <h1>Coaching</h1>
                    <h3><i>&#8243;Jeg hjelper deg å nå dine mål&#8243;</i></h3>
                </div>
            </section>
            <section className="omMegSection1">
                <div className="omMegSection1-innerDiv">
                    <h1 className="backgroundHeader">Bakgrunn</h1>
                    <p className="backgroundParagraf">Som en aktiv og sosial gutt ble jeg interessert i ulike idretter i ung alder, og det som motiverte meg mest var uten tvil mestringsfølelsen de ulike idrettene gav meg. Dette har ført til mange aktive år både som utøver og trener i idretter som fotball, ishockey, basketball og snowboard. Gjennom idretten ble jeg introdusert for styrketrening som 13 åring og med en gang ble jeg fasinert over hvordan man kunne forme kroppen og bli sterkere med målrettet arbeid over litt tid. Nå med snart 30 år innen idrett og styrketrening har jeg opparbeidet meg mye erfaring om hvordan man skal trene for å nå ulike målsetninger.</p>
                </div>
            </section>
            <section className="omMegSection2">
                    <div className="omMegSection2-Innerdiv">
                        <h1>Kompetanse</h1>
                        <p><span style={{ color: "green"}}>&#10003;</span> Bachelorgrad i Idrettsvitenskap med fordypning i fysiologi</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Ulike kostholdskurs</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> PT utdanning</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Trener 1,2,3 gjennom Norges Ishockey Forbund og Olympiatoppen</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Aktivitetsleder kurs gjennom Norges Fotball Forbund </p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Trener 1 i Curling gjennom Norges Curlingforbund</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Kurs i slyngetrening</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Kurs i forebygging og rehabilitering av skader</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> IFBB Sertifisert Coach</p>
                    </div>
            </section>
            <section className="omMegSection3">
                <div className="omMegSection3-innerDiv">
                    <h5 className="mobileContent">( Scroll for å se flere bilder &rarr;)</h5>
                    <Galleri />
                </div>
            </section> 
            <section className="omMegSection4">
                <Footer />
            </section>
        </main>
    )
}

