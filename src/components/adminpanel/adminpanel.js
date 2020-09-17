import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

const firebase = require("firebase");

export default function Admin() {

    const [kunder, setKunder] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        firebase.firestore().collection('users').get().then(snapshot => {
            const container = []
            snapshot.forEach(_usr => {
                const data = _usr.data();
                container.push(data)
            })
            setKunder(container)
            setIsLoading(false)
        })
        .catch( error => console.log(error))
    }, [reload])

    // Funksjon for å slette eksisterende matplan
    function deleteMatplan(index) {
        firebase.firestore().collection('users').doc(kunder[index].email).get().then(obj => {
            const gammelMatplan = obj.data()
            if(gammelMatplan.matplan) {
                firebase.storage().ref('users/' + kunder[index].email + '/matplan/').child(gammelMatplan.matplan).delete().then(() => {
                    console.log('Gammel matplan er slettet')
                })
                const userObj = {
                    matplan: firebase.firestore.FieldValue.delete()
                }
                firebase.firestore().collection('users').doc(kunder[index].email).update(userObj).then(() => {
                    setReload(prevState => !prevState)
                })
            }
        }) 
    }

    // Funksjon for å laste opp matplan
    function uploadMatplan(e, index) {
        firebase.firestore().collection('users').doc(kunder[index].email).get().then(obj => {
            const gammelMatplan = obj.data()
            if(gammelMatplan.matplan) {
                firebase.storage().ref('users/' + kunder[index].email + '/matplan/').child(gammelMatplan.matplan).delete().then(() => {
                    console.log('Gammel matplan er slettet')
                })
            } else {
                console.log('Dette er den første matplan som lastes opp')
            }
        })
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref('users/' + kunder[index].email + '/matplan/')
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            const userObj = {
                email: kunder[index].email,
                matplan: file.name
            };
            firebase.firestore().collection('users').doc(kunder[index].email).update(userObj).then(() => {
                console.log(userObj)
                setReload(prevState => !prevState)
            })
        })
    }

    // Funksjon for å slette eksisterende treningsplan
    function deleteTreningsplan(index) {
        firebase.firestore().collection('users').doc(kunder[index].email).get().then(obj => {
            const gammelTreningsplan = obj.data()
            if(gammelTreningsplan.treningsplan) {
                firebase.storage().ref('users/' + kunder[index].email + '/treningsplan/').child(gammelTreningsplan.treningsplan).delete().then(() => {
                    console.log('Gammel treningsplan er slettet')
                })
                const userObj = {
                    treningsplan: firebase.firestore.FieldValue.delete()
                }
                firebase.firestore().collection('users').doc(kunder[index].email).update(userObj).then(() => {
                    setReload(prevState => !prevState)
                })
            }
        })
    }

    // Funksjon for å laste opp treningsplan
    function uploadTreningsplan(e, index) {
        firebase.firestore().collection('users').doc(kunder[index].email).get().then(obj => {
            const gammelTreningsplan = obj.data()
            if(gammelTreningsplan.treningsplan) {
                firebase.storage().ref('users/' + kunder[index].email + '/treningsplan/').child(gammelTreningsplan.treningsplan).delete().then(() => {
                    console.log('Gammel treningsplan er slettet')
                })
            } else {
                console.log('Dette er den første treningsplanen som lastes opp')
            }
        })
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref('users/' + kunder[index].email + '/treningsplan/')
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            const userObj = {
                email: kunder[index].email,
                treningsplan: file.name
            };
            firebase.firestore().collection('users').doc(kunder[index].email).update(userObj).then(() => {
                console.log(userObj)
                setReload(prevState => !prevState)
            })
        })
    }

    // Funksjon for å slette bruker
    function deleteUser(index) {
        firebase.firestore().collection('chats').doc('kriss122830@gmail.com' + ':' + kunder[index].email).delete().then(() => {
            console.log('Chat er slettet')
        })
        firebase.firestore().collection('chats').doc(kunder[index].email + ':' + 'kriss122830@gmail.com').delete().then(() => {
            console.log('Chat er slettet')
        })
        firebase.firestore().collection('users').doc(kunder[index].email).get().then(obj => {
            const brukerData = obj.data()
            if(brukerData.matplan && brukerData.treningsplan) {
                firebase.storage().ref('users/' + kunder[index].email + '/matplan/').child(brukerData.matplan).delete().then(() => {
                    console.log('Gammel matplan er slettet')
                })
                firebase.storage().ref('users/' + kunder[index].email + '/treningsplan/').child(brukerData.treningsplan).delete().then(() => {
                    console.log('Gammel treningsplan er slettet')
                })
                firebase.firestore().collection('users').doc(kunder[index].email).delete().then(() => {
                    console.log('Bruker er slettet fra firestore')
                    setReload(prevState => !prevState)
                })
            } else if(brukerData.matplan && !brukerData.treningsplan) {
                firebase.storage().ref('users/' + kunder[index].email + '/matplan/').child(brukerData.matplan).delete().then(() => {
                    console.log('Gammel matplan er slettet')
                })
                firebase.firestore().collection('users').doc(kunder[index].email).delete().then(() => {
                    console.log('Bruker er slettet fra firestore')
                    setReload(prevState => !prevState)
                })
            } else if(!brukerData.matplan && brukerData.treningsplan) {
                firebase.storage().ref('users/' + kunder[index].email + '/treningsplan/').child(brukerData.treningsplan).delete().then(() => {
                    console.log('Gammel treningsplan er slettet')
                })
                firebase.firestore().collection('users').doc(kunder[index].email).delete().then(() => {
                    console.log('Bruker er slettet fra firestore')
                    setReload(prevState => !prevState)
                })
            } else {
                firebase.firestore().collection('users').doc(kunder[index].email).delete().then(() => {
                    console.log('Bruker er slettet fra firestore')
                    setReload(prevState => !prevState)
                })
            }
        })
    }

    return(
        <div>
            {
                isLoading ? <div className="loadingDivMain"><p>Loading...</p></div> :
                <div className="adminMainContainer">
                    {
                        kunder ? kunder.map((kunde, index) => {
                            if(kunde.email !== 'kriss122830@gmail.com') {
                                return(
                                    <div className="userBox" key={index}>
                                        <div className="emailBox">
                                            <h3>{kunde.fullName} ( {kunde.gender == 2 ? "Kvinne" : "Mann"} )</h3>
                                            <div className="emailAndNumber">
                                            <p>Email: {kunde.email}</p>
                                            <p>Telefon: {kunde.number}</p>
                                        </div>
                                        </div>
                                        <div className="matplanBox">
                                            <div className="matplanBox1">
                                                <p>Matplan: </p>
                                                <p className="linkStyle">{kunde.matplan ? kunde.matplan : 'Ingen matplan'}</p>
                                            </div>
                                            <div className="matplanBox2">
                                                <button className="buttonStyle" type="button" onClick={() => deleteMatplan(index)}>Slett</button>
                                                <input type="file" onChange={(event) => uploadMatplan(event, index)}/>
                                            </div>
                                        </div>
                                        <div className="treningsplanBox">
                                            <div className="treningsplanBox1">
                                                <p>Treningsplan: </p>
                                                <p className="linkStyle">{kunde.treningsplan ? kunde.treningsplan : 'Ingen treningsplan'}</p>
                                            </div>
                                            <div className="treningsplanBox2">
                                                <button className="buttonStyle" type="button" onClick={() => deleteTreningsplan(index)}>Slett</button>
                                                <input type="file" onChange={(event) => uploadTreningsplan(event, index)}/>
                                            </div>
                                        </div>
                                        <div className="alderhøydevekt">
                                            <p>Alder: {kunde.age}</p>
                                            <p>Høyde: {kunde.height} cm</p>
                                            <p>Vekt: {kunde.weight} kg</p>
                                        </div>
                                        <div className="adresse">
                                            <p>Adresse: {kunde.adress}</p>
                                        </div>
                                        <div className="målsetting">
                                            <p>Målsetting: {kunde.goals}</p>
                                        </div>
                                        <button className="slettBrukerBtn" onClick={() => deleteUser(index)}>Slett Bruker</button>
                                    </div>
                                )
                            }
                        }) : null
                    }
                </div>
            }
        </div>
    )
}


