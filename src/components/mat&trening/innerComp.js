import React from 'react'
import Button from '@material-ui/core/Button'

export default function InnerComp({ fileUrlMatplan, fileUrlTreningsplan }) {

    function matplanValid() {
        if(!fileUrlMatplan) {
            alert('Du har ingen matplan tilgjengelig..')
        }
    }

    function treningsplanValid() {
        if(!fileUrlTreningsplan) {
            alert('Du har ingen treningsplan tilgjengelig..')
        } 
    }

    return(
        <main className={'mainMatTrening'}>
            <div className={'innerMainMatTrening'}><p className={'innerMainMatTreningP'}>Her finner du din matplan og treningsplan. Trykk på knappene for å åpne filene.</p></div>
            <div className={'mainDivMatTrening'}>
                <div className={'leftDivMatTrening'}>
                    <div className={'innerLeftDivMatTrening'}>
                        <Button variant="contained" color="primary" onClick={() => matplanValid()}><a href={fileUrlMatplan}>Matplan</a></Button>
                    </div>
                </div>
                <div className={'rightDivMatTrening'}>
                    <div className={'innerRightDivMatTrening'}>
                        <Button variant="contained" color="primary" onClick={() => treningsplanValid()}><a className="treningsPlanLink" href={fileUrlTreningsplan}>Treningsplan</a></Button>
                    </div>
                </div>
            </div>
        </main>
    )
}