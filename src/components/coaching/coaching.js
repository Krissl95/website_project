import React from 'react'
import profilBilde from '../../images/bilde2.jpg'
import profilBilde2 from '../../images/bilde4.jpg'
import Footer from '../footer/footer'
import './styles.css'


class Coaching extends React.Component {
    render() {
        return(
            <main className="coachingMainContainer">
                <section className="introSection">
                    
                </section>
                <section className="coachingSection1">
                    <div className="coachingInnerDivSection1">
                        <div className="coachingText">
                            <h1>Coaching</h1>
                            <p>Som coach hjelper jeg deg med å sette realistiske målsetninger, og du vil få en skreddersydd plan som vil hjelpe deg til å nå målene dine. Både trening og kosthold blir tilpasset din hverdag og dine ønsker så langt det lar seg gjøre slik at endringene du må gjøre i hverdagen bli så behagelige som mulig. Det er alltid det som fungerer i lengden som vi gi deg de beste og de langvarige resultatene. Jeg vil ikke holde deg i hånden gjennom denne prosessen, men jeg vil stille krav samtidig som jeg støtte og motivere deg gjennom en regelmessig oppfølging. </p>
                        </div>
                        <img className="coachingBilde" src={profilBilde} alt="profilBilde" />
                    </div>
                </section>
                <section className="coachingSection3">
                    <div className="section3innerdiv">
                        <img className="coachingBilde2" src={profilBilde2} alt="profilBilde" />
                        <div className="section3text">
                            <h1>Spesialiteter</h1>
                            <p>&rsaquo; Vektnedgang</p>
                            <p>&rsaquo; Fettforbrenning</p>
                            <p>&rsaquo; Økt styrke</p>
                            <p>&rsaquo; Muskelvekst</p>
                            <p>&rsaquo; Idrettsspesifikk trening</p>
                            <p>&rsaquo; Skadeforebygging og rehabilitering av skader</p>
                            <p>&rsaquo; Fitness og kroppsbygging</p>
                            <p>&rsaquo; Livsstilforandring</p>
                        </div>
                    </div>
                        <div className="section3text2">
                            <div>
                            <h1>Erfaringer</h1>
                            <p>&rsaquo; Snart 30 år med idrett og styrketrening</p>
                            <p>&rsaquo; 8 år som ishockeytrener</p>
                            <p>&rsaquo; 3 år som hovedtrener for Gjøvik Hockey A-lag i 1 og 2 divisjon</p>
                            <p>&rsaquo; 10 år som personlig trener</p>
                            <p>&rsaquo; Coaching i fitness og kroppsbygging for Team 24fitness med mange topplasseringer</p>
                            <p>&rsaquo; 7 år som klassisk kroppsbygger med flere topplasseringer</p>  
                            </div>
                        </div>
                </section>
                <div className="sectionForMobile">
                    <div className="sectionForMobileInner">
                        <h1>Erfaringer</h1>
                        <p>&rsaquo; Snart 30 år med idrett og styrketrening</p>
                        <p>&rsaquo; 8 år som ishockeytrener</p>
                        <p>&rsaquo; 3 år som hovedtrener for Gjøvik Hockey A-lag i 1 og 2 divisjon</p>
                        <p>&rsaquo; 10 år som personlig trener</p>
                        <p>&rsaquo; Coaching i fitness og kroppsbygging for Team 24fitness med mange topplasseringer</p>
                        <p>&rsaquo; 7 år som klassisk kroppsbygger med flere topplasseringer</p>  
                    </div>
                </div>
                <Footer />
            </main>
        );
    }
}

export default Coaching;