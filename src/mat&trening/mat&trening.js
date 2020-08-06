import React from 'react'
import Button from '@material-ui/core/Button'
import './styles.css'

const firebase = require("firebase");

class MatTrening extends React.Component {
    constructor() {
        super();

        this.state = {
            fileNameMatplan: null,
            fileNameTreningsplan: null,
            fileUrlMatplan: null,
            fileUrlTreningsplan: null,
            urlstring1: '',
            urlstring2: '',
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(_usr => {
            // Quick fix slik at det ikke skal poppe opp error når brukeren logger ut
            if(!_usr) {
                console.log('Du er ikke logget inn.')
            } else if(_usr) {
                firebase.firestore().collection('users').get().then(snapshot => {
                    const fileNameMatplan = []
                    const fileNameTreningsplan = []
                    const fileurlmatplan = []
                    const fileurltreningsplan = []
                    snapshot.forEach(user => {
                        const kunde = user.data()
                        if(kunde.email === _usr.email) {
                            //const data = user.data()
                            fileNameMatplan.push(kunde.matplan)
                            fileNameTreningsplan.push(kunde.treningsplan)
                            this.setState({
                                fileNameMatplan: fileNameMatplan,
                                fileNameTreningsplan: fileNameTreningsplan
                            })
                            // Kode for å hente link til matplan
                            firebase.storage().ref().child('users/' + _usr.email + '/matplan/' + this.state.fileNameMatplan).getDownloadURL().then(function(url) {
                                console.log('Matplan ' + url);
                                fileurlmatplan.push(url)
                            })
                            this.setState({ fileUrlMatplan: fileurlmatplan })
                            console.log('Matplan: ' + this.state.fileNameMatplan + ' / ' + 'Treningsplan: ' + this.state.fileNameTreningsplan)
                            // Kode for å hente link til treningsplan
                            firebase.storage().ref().child('users/' + _usr.email + '/treningsplan/' + this.state.fileNameTreningsplan).getDownloadURL().then(function(url) {
                                console.log('Treningsplan ' + url);
                                fileurltreningsplan.push(url)
                            })
                            this.setState({ fileUrlTreningsplan: fileurltreningsplan })
                        } 
                    })
                })
            }
        })
    }
    matplan = () => {
        this.setState({
            urlstring1: this.state.fileUrlMatplan[0]
        })
    }
    treningsplan = () => {
        this.setState({
            urlstring2: this.state.fileUrlTreningsplan[0]
        })
    }
    render() {
        return(
            <main className={'mainMatTrening'}>
                <div className={'innerMainMatTrening'}><p className={'innerMainMatTreningP'}>Her finner du din matplan og treningsplan. Trykk på knappene for å åpne filene.</p></div>
                <div className={'mainDivMatTrening'}>
                    <div className={'leftDivMatTrening'}>
                        <div className={'innerLeftDivMatTrening'}>
                            <Button variant="contained" color="primary">
                                <a onClick={this.matplan} href={this.state.urlstring1}>Matplan</a>
                            </Button>
                        </div>
                    </div>
                    <div className={'rightDivMatTrening'}>
                        <div className={'innerRightDivMatTrening'}>
                            <Button variant="contained" color="primary">
                                <a onClick={this.treningsplan} href={this.state.urlstring2}>Treningsplan</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default MatTrening;