import React from 'react'
import profilBilde from '../../images/RogerProfilbilde.jpg'
import bilde2 from '../../images/hjemBildeSeksjon2.jpg'
import bilde3 from '../../images/testimg.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from '../footer/footer'
import './hjem.css'

const Hjem = () => {
    return(
        <main className="coachingMainContainer">
            <section className="introSection">
                <div className="homeIntroSection">
                    <h1>Coaching</h1>
                    <h3><i>&#8243;Jeg hjelper deg å nå dine mål&#8243;</i></h3>
                </div>
            </section>
            <section className="homeSection1">
                <div className="homeSection1-innerDiv">
                    <div className="homeSection1-left">
                        <h1>Litt om meg som coach</h1>
                        <p>Som coach hjelper jeg deg med å sette realistiske målsetninger, og du vil få en skreddersydd plan som vil hjelpe deg til å nå målene dine. Både trening og kosthold blir tilpasset din hverdag og dine ønsker så langt det lar seg gjøre slik at endringene du må gjøre i hverdagen bli så behagelige som mulig. Det er alltid det som fungerer i lengden som vi gi deg de beste og de langvarige resultatene. Jeg vil ikke holde deg i hånden gjennom denne prosessen, men jeg vil stille krav samtidig som jeg støtte og motivere deg gjennom en regelmessig oppfølging. </p>
                    </div>
                    <div className="homeSection1-right">
                        <img className="coachingBilde" src={profilBilde} alt="profilBilde" />
                    </div>
                </div>
            </section>
            <section className="homeSection2">
                <div className="homeSection2-innerDiv">
                    <div className="homeSection2-left">
                        <div className="homeSection2-left-innerDiv">
                            <div className="circle">1</div>
                            <h2>Kartlegging</h2>
                            <p>
                                Det hele starter med at du velger en pakke som passer deg. Når det er gjort innhenter jeg relevant informasjon som jeg trenger for å designe et individuelt oppsett til deg. Dette gjøres ved at du får tilsendt et spørreskjema på e-post som du må besvare før jeg kan designe kost og treningsplan etter din data og dine målsetninger. 
                            </p>
                            <a className="pakkeOgPrisLink" href="#" style={{ color:"blue", float:"left", textDecoration:"underline" }}><span className="arrowSeksjon2">&#8618;</span><i> Gå til pakker og priser</i></a>
                        </div>
                     </div>   
                    <div className="homeSection2-right">
                        <div className="homeSection2-left-innerDiv">
                            <div className="circle">2</div>
                            <h2>Leveranse</h2>
                            <p>
                                Når jeg har utarbeidet din individuelle plan vil den bli lagt inn på din side. Den vil inneholde alt du trenger steg for steg, samt relevant informasjon, generelle råd og tips om etterlevelse og tilpassing i din hverdag.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="homeSection3">
                <div className="homeSection3-innerDiv">
                    <div className="homeSection3-left">
                        <div className="homeSection2-left-innerDiv">
                            <div className="circle">3</div>
                            <h2>Kommunikasjon </h2>
                            <p>
                                Du kan kommunisere ubegrenset med meg via chatt på din side underveis. Her kan du stille alle spørsmål eller komme med tilbakemeldinger om utfordringer, oppturer, nedturer osv. sånn at jeg kan hjelpe deg hele veien igjennom denne prosessen. 
                            </p>
                        </div>
                    </div>
                    <div className="homeSection3-right">
                        <div className="homeSection2-left-innerDiv">
                            <div className="circle">4</div>
                            <h2>Oppfølging</h2>
                            <p>
                                Vedlagt dine individuelle planer får du en oversikt over faste oppfølginger gjennom ditt forløp. Her må du selv rapportere med bestemt data og bilder sånn at jeg kan evaluere din fremgang og gjøre nødvendige justeringer og tilpasninger underveis for at du skal ha en jevn progresjon. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="homeSection4">
                <div className="homeSection4-innerDiv">
                    <Slider
                    speed={700}
                    slidesToScroll={1}
                    slidesToScroll={1}
                    infinite={true}
                    dots={true}
                    arrows={true}
                    >
                        <div className="homeSection4-container">
                            <div className="homeSection4-left-wrapper">
                                <div className="homeSection4-left">
                                    <h1>Mine Spesialiteter</h1>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Vektnedgang</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Fettforbrenning</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Økt styrke</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Muskelvekst</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Idrettsspesifikk trening</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Skadeforebygging og rehabilitering av skader</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Fitness og kroppsbygging</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Livsstilforandring</p>
                                </div>
                                <div className="homeSection4-right">
                                    <img className="coachingBilde2" src={bilde2} alt="profilBilde" />
                                </div>
                            </div>
                        </div>
                        <div className="homeSection4-container">
                            <div className="homeSection4-left-wrapper">
                                <div className="homeSection4-left">
                                    <h1>Mine Erfaringer</h1>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Snart 30 år med idrett og styrketrening</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> 8 år som ishockeytrener</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> 3 år som hovedtrener for Gjøvik Hockey A-lag i 1 og 2 divisjon</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> 10 år som personlig trener</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Kroppsbygging for Team 24fitness med mange topplasseringer</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> 7 år som klassisk kroppsbygger med flere topplasseringer</p>
                                    <p><span style={{ color: "green"}}>&#10003;</span> Tidligere skribent for treningsmagasinet Iron Man Magazine</p>
                                </div>
                                <div className="homeSection4-right">
                                    <img className="coachingBilde2" src={bilde3} alt="profilBilde" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="homeSection4-mobile">
                <div className="homeSection4-mobile-innerDiv">
                    <div className="homeSection4-first">
                        <h1>Mine Spesialiteter</h1>
                        <p><span style={{ color: "green"}}>&#10003;</span> Vektnedgang</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Fettforbrenning</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Økt styrke</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Muskelvekst</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Idrettsspesifikk trening</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Skadeforebygging og rehabilitering av skader</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Fitness og kroppsbygging</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Livsstilforandring</p>
                    </div>
                    <div className="homeSection4-second">
                        <img className="coachingBilde2" src={bilde2} alt="profilBilde" />
                    </div>
                    <div className="homeSection4-third">
                        <h1>Mine Erfaringer</h1>
                        <p><span style={{ color: "green"}}>&#10003;</span> Snart 30 år med idrett og styrketrening</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> 8 år som ishockeytrener</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> 3 år som hovedtrener for Gjøvik Hockey A-lag i 1 og 2 divisjon</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> 10 år som personlig trener</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Kroppsbygging for Team 24fitness med mange topplasseringer</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> 7 år som klassisk kroppsbygger med flere topplasseringer</p>
                        <p><span style={{ color: "green"}}>&#10003;</span> Tidligere skribent for treningsmagasinet Iron Man Magazine</p>
                    </div>
                    <div className="homeSection4-fourth">
                        <img className="coachingBilde2" src={bilde3} alt="profilBilde" />
                    </div>
                </div>
            </section>
            <section className="homeSection5">
                <Footer />
            </section>
        </main>
    )
}

export default Hjem;

/*

<h1>Spesialiteter</h1>
    <p>&#10003; Vektnedgang</p>
    <p>&#10003; Fettforbrenning</p>
    <p>&#10003; Økt styrke</p>
    <p>&#10003; Muskelvekst</p>
    <p>&#10003; Idrettsspesifikk trening</p>
    <p>&#10003; Skadeforebygging og rehabilitering av skader</p>
    <p>&#10003; Fitness og kroppsbygging</p>
    <p>&#10003; Livsstilforandring</p>
</div>
<div className="homeSection2-middle">
    <img className="coachingBilde" src={bilde1} alt="profilBilde" />
</div>

<img className="coachingBilde" src={bilde2} alt="profilBilde" />

<h1>Erfaringer</h1>
                    <p>&#10003; Snart 30 år med idrett og styrketrening</p>
                    <p>&#10003; 8 år som ishockeytrener</p>
                    <p>&#10003; 3 år som hovedtrener for Gjøvik Hockey A-lag i 1 og 2 divisjon</p>
                    <p>&#10003; 10 år som personlig trener</p>
                    <p>&#10003; Coaching i fitness og kroppsbygging for Team 24fitness med mange topplasseringer</p>
                    <p>&#10003; 7 år som klassisk kroppsbygger med flere topplasseringer</p>
                    <p>&#10003; Tidligere skribent for treningsmagasinet Iron Man Magazine</p>




            <section className="introSection"></section>
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

*/