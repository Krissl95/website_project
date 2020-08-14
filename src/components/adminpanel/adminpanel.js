import React from 'react'
import './styles.css'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const firebase = require("firebase");

class AdminPanel extends React.Component {

    constructor() {
        super();

        this.state = {
            kunder: null,
            matplan: '',
            treningsplan: ''
        }
    }

    componentDidMount() {
        firebase.firestore().collection('users').get().then( snapshot => {
            const kunder = []
            snapshot.forEach( doc => {
                const data = doc.data()
                kunder.push(data)
            })
            this.setState({
                kunder: kunder
            })
            console.log(this.state.kunder)

        })
        .catch( error => console.log(error))
    }


    render() {
        return(
            <div className={"main-div"}>
                <div>
                    
                </div>
                <div>
                    <h1>Kontrollpanel for matplan/treningsplan</h1>
                    <table>
                        <tbody>
                            <tr><th>Email</th><th>Eksisterende Matplan</th><th>Last opp Matplan</th><th>Eksisterende Treningsplan</th><th>Last opp Treningsplan</th></tr>
                            {   
                                this.state.kunder ? this.state.kunder.map((kunde , index) => {
                                    this.uploadMatplan = (e) => {
                                        // Henter ut den brukeren der matplanen skal oppdateres
                                        firebase.firestore().collection('users').doc(kunde.email).get().then(obj => {
                                            const gammelMatplan = obj.data()
                                            // Sjekker om denne brueren har en matplan fra før
                                            if(gammelMatplan.matplan) {
                                                // Hvis brukeren har en matplan fra før slettes denne 
                                                firebase.storage().ref('users/' + kunde.email + '/matplan/').child(gammelMatplan.matplan).delete().then(() => {
                                                    console.log('Gammel matplan er slettet')
                                                })
                                            } else {
                                                // Hvis brukeren ikke har en matplan fra før så logges dette i consolet
                                                console.log('Dette er den første matplanen som lastes opp')
                                            }
                                        })
                                        // Legger opplastet fil i 'file' som blir lagt som et 'child' i matplan folderen
                                        const file = e.target.files[0]
                                        // Oppdaterer matplan i storage
                                        const storageRef = firebase.storage().ref('users/' + kunde.email + '/matplan/')
                                        const fileRef = storageRef.child(file.name)
                                        fileRef.put(file).then(() => {
                                            this.setState({
                                                fileUrl: fileRef.getDownloadURL(),
                                                matplan: file.name
                                            })
                                            const userObj = {
                                                email: kunde.email,
                                                matplan: file.name
                                            };
                                            // Oppdaterer matplan i firestore
                                            firebase.firestore().collection('users').doc(kunde.email).update(userObj).then(() => {
                                                console.log(userObj)
                                                window.location.reload(true)
                                            })
                                        })
                                    }
                                    this.uploadTreningsplan =  (e) => {
                                        // Henter ut den brukeren der treningsplanen skal oppdateres
                                        firebase.firestore().collection('users').doc(kunde.email).get().then(obj => {
                                            const gammelTreningsplan = obj.data()
                                            // Sjekker om denne brueren har en treningsplan fra før
                                            if(gammelTreningsplan.treningsplan) {
                                                // Hvis brukeren har en treningsplan fra før slettes denne
                                                firebase.storage().ref('users/' + kunde.email + '/treningsplan/').child(gammelTreningsplan.treningsplan).delete().then(() => {
                                                    console.log('Gammel treningsplan er slettet')
                                                })
                                            } else {
                                                // Hvis brukeren ikke har en treningsplan fra før så logges dette i consolet
                                                console.log('Dette er den første treningsplanen som lastes opp')
                                            }
                                        })
                                        // Legger opplastet fil i 'file' som blir lagt som et 'child' i treningsplan folderen
                                        const file = e.target.files[0]
                                        // Oppdaterer treningsplan i storage
                                        const storageRef = firebase.storage().ref('users/' + kunde.email + '/treningsplan/')
                                        const fileRef = storageRef.child(file.name)
                                        fileRef.put(file).then(() => {
                                            this.setState({
                                                fileUrl: fileRef.getDownloadURL(),
                                                treningsplan: file.name
                                            })
                                            const userObj = {
                                                email: kunde.email,
                                                treningsplan: file.name
                                            };
                                            // Oppdaterer treningsplan i firestore
                                            firebase.firestore().collection('users').doc(kunde.email).update(userObj).then(() => {
                                                console.log(userObj)
                                                window.location.reload(true)
                                            })
                                        })
                                    }
                                    // Funksjon for å slette matplaner
                                    this.slettMatplan = () => {
                                        // Sjekker om det eksisterer en matplan i firestore først. Hvis den eksisterer i firestore ligger den også i storage
                                        firebase.firestore().collection('users').doc(kunde.email).get().then(obj => {
                                            const gammelMatplan = obj.data()
                                            // Hvis det finnes en matplan slettes denne først fra storage så fra firestore
                                            if(gammelMatplan.matplan) {
                                                firebase.storage().ref('users/' + kunde.email + '/matplan/').child(gammelMatplan.matplan).delete().then(() => {
                                                    console.log('Gammel matplan er slettet')
                                                })
                                                const userObj = {
                                                    matplan: firebase.firestore.FieldValue.delete()
                                                }
                                                firebase.firestore().collection('users').doc(kunde.email).update(userObj).then(() => {
                                                    console.log(userObj)
                                                    window.location.reload(true)
                                                })
                                            }
                                        })
                                    }
                                    // Funksjon for å slette treningsplaner
                                    this.slettTreningsplan = () => {
                                        // Sjekker om det eksisterer en treningsplan i firestore først. Hvis den eksisterer i firestore ligger den også i storage
                                        firebase.firestore().collection('users').doc(kunde.email).get().then(obj => {
                                            const gammelTreningsplan = obj.data()
                                            // Hvis det finnes en treningsplan slettes denne først fra storage så fra firestore
                                            if(gammelTreningsplan.treningsplan) {
                                                firebase.storage().ref('users/' + kunde.email + '/treningsplan/').child(gammelTreningsplan.treningsplan).delete().then(() => {
                                                    console.log('Gammel treningsplan er slettet')
                                                })
                                                const userObj = {
                                                    treningsplan: firebase.firestore.FieldValue.delete()
                                                }
                                                firebase.firestore().collection('users').doc(kunde.email).update(userObj).then(() => {
                                                    console.log(userObj)
                                                    window.location.reload(true)
                                                })
                                            }
                                        })
                                    }
                                    // Funksjon for å slette brukere fra firestore og storage
                                    this.slettBruker = () => {
                                        firebase.firestore().collection('chats').doc('kriss122830@gmail.com'+':'+kunde.email).delete().then(() => {
                                            console.log('Chat er slettet')
                                        })
                                        firebase.firestore().collection('chats').doc(kunde.email+':'+'kriss122830@gmail.com').delete().then(() => {
                                            console.log('Chat er slettet')
                                        })
                                        firebase.firestore().collection('users').doc(kunde.email).get().then(obj => {
                                            const brukerData = obj.data()
                                            if(brukerData.matplan && brukerData.treningsplan) {
                                                firebase.storage().ref('users/' + kunde.email + '/matplan/').child(brukerData.matplan).delete().then(() => {
                                                    console.log('Gammel matplan er slettet')
                                                })
                                                firebase.storage().ref('users/' + kunde.email + '/treningsplan/').child(brukerData.treningsplan).delete().then(() => {
                                                    console.log('Gammel treningsplan er slettet')
                                                })
                                                firebase.firestore().collection('users').doc(kunde.email).delete().then(() => {
                                                    console.log('Bruker er slettet fra firestore')
                                                    window.location.reload(true)
                                                })
                                            } else if(brukerData.matplan && !brukerData.treningsplan) {
                                                firebase.storage().ref('users/' + kunde.email + '/matplan/').child(brukerData.matplan).delete().then(() => {
                                                    console.log('Gammel matplan er slettet')
                                                })
                                                firebase.firestore().collection('users').doc(kunde.email).delete().then(() => {
                                                    console.log('Bruker er slettet fra firestore')
                                                    window.location.reload(true)
                                                })
                                            } else if(!brukerData.matplan && brukerData.treningsplan) {
                                                firebase.storage().ref('users/' + kunde.email + '/treningsplan/').child(brukerData.treningsplan).delete().then(() => {
                                                    console.log('Gammel treningsplan er slettet')
                                                })
                                                firebase.firestore().collection('users').doc(kunde.email).delete().then(() => {
                                                    console.log('Bruker er slettet fra firestore')
                                                    window.location.reload(true)
                                                })
                                            } else {
                                                firebase.firestore().collection('users').doc(kunde.email).delete().then(() => {
                                                    console.log('Bruker er slettet fra firestore')
                                                    window.location.reload(true)
                                                })
                                            }
                                        })
                                    }
                                    if(kunde.email !== 'kriss122830@gmail.com') {
                                        return(
                                            <tr key={index}>
                                                <td>{kunde.email}
                                                <Button
                                                    onClick={this.slettBruker}
                                                    variant="contained"
                                                    color="secondary"
                                                    size="small"
                                                    style={{float: 'right', marginLeft: '10px', marginRight: '10px'}}
                                                    startIcon={<DeleteIcon />}
                                                >
                                                    Slett
                                                </Button>
                                                </td>
                                                <td>{kunde.matplan ? kunde.matplan : null}
                                                <Button
                                                    onClick={this.slettMatplan}
                                                    variant="contained"
                                                    color="secondary"
                                                    size="small"
                                                    style={{float: 'right', marginLeft: '10px', marginRight: '10px'}}
                                                    startIcon={<DeleteIcon />}
                                                >
                                                    Slett
                                                </Button>
                                                </td>
                                                <td>
                                                    <form>
                                                        <Button
                                                            variant="contained"
                                                            color="default"
                                                            startIcon={<CloudUploadIcon />}
                                                            style={{cursor: 'default'}}
                                                        >
                                                        <label style={{cursor: 'pointer'}}>
                                                        <input type="file" type="file" style={{display: 'none'}} onChange={this.uploadMatplan} />
                                                        Last opp
                                                        </label>
                                                        </Button>
                                                    </form>
                                                </td>
                                                <td>{kunde.treningsplan ? kunde.treningsplan : null}
                                                <Button
                                                    onClick={this.slettTreningsplan}
                                                    variant="contained"
                                                    color="secondary"
                                                    size="small"
                                                    style={{float: 'right', marginLeft: '10px', marginRight: '10px'}}
                                                    startIcon={<DeleteIcon />}
                                                >
                                                    Slett
                                                </Button>
                                                </td>
                                                <td>
                                                    <form>
                                                        <Button
                                                            variant="contained"
                                                            color="default"
                                                            startIcon={<CloudUploadIcon />}
                                                            style={{cursor: 'default'}}
                                                        >
                                                        <label style={{cursor: 'pointer'}}>
                                                        <input type="file" style={{display: 'none'}} onChange={this.uploadTreningsplan} />
                                                        Last opp
                                                        </label>
                                                        </Button>
                                                    </form>
                                                </td>
                                            </tr>
                                        )
                                    }
                                }) : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AdminPanel;