import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './styles.css'

const Coaching = () => {

    return(
        <div className="appWrapper">
            <div className="wrapper">
                <Slider
                speed={700}
                slidesToScroll={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}
                arrows={true}
                >
                <div className="textContainer">
                    <div className="circle">1</div>
                    <h2>Kartlegging</h2>
                    <p>
                        Det hele starter med at du velger en pakke som passer deg. Når det er gjort innhenter jeg relevant informasjon som jeg trenger for å designe et individuelt oppsett til deg. Dette gjøres ved at du får tilsendt et spørreskjema på e-post som du må besvare før jeg kan designe kost og treningsplan etter din data og dine målsetninger. 
                    </p>
                </div>
                <div className="textContainer">
                    <div className="circle">2</div>
                    <h2>Leveranse</h2>
                    <p>
                        Når jeg har utarbeidet din individuelle plan vil den bli lagt inn på din side. Den vil inneholde alt du trenger steg for steg, samt relevant informasjon, generelle råd og tips om etterlevelse og tilpassing i din hverdag.
                    </p>
                </div>
                <div className="textContainer">
                    <div className="circle">3</div>
                    <h2>Kommunikasjon </h2>
                    <p>
                        Du kan kommunisere ubegrenset med meg via chatt på din side underveis. Her kan du stille alle spørsmål eller komme med tilbakemeldinger om utfordringer, oppturer, nedturer osv. sånn at jeg kan hjelpe deg hele veien igjennom denne prosessen. 
                    </p>
                </div>
                <div className="textContainer">
                    <div className="circle">4</div>
                    <h2>Oppfølging</h2>
                    <p>
                        Vedlagt dine individuelle planer får du en oversikt over faste oppfølginger gjennom ditt forløp. Her må du selv rapportere med bestemt data og bilder sånn at jeg kan evaluere din fremgang og gjøre nødvendige justeringer og tilpasninger underveis for at du skal ha en jevn progresjon. 
                     </p>
                </div>
                </Slider>
            </div>
        </div>
    )
}

export default Coaching;