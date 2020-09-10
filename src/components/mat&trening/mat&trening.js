import React, {useState, useEffect } from 'react'
import InnerComp from './innerComp'
import './styles.css'

const firebase = require("firebase");

export default function KundePlan() {

    const [fileNameMatplan, setFileNameMatplan] = useState(null)
    const [fileNameTreningsplan, setFileNameTreningsplan] = useState(null)
    const [fileUrlMatplan, setFileUrlMatplan] = useState(null)
    const [fileUrlTreningsplan, setFileUrlTreningsplan] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        firebase.firestore().collection('users').get().then(snapshot => {
            snapshot.forEach(user => {
                const kunde = user.data()
                const _usr = firebase.auth().currentUser;
                if(kunde.email === _usr.email) {
                    if(kunde.matplan && kunde.treningsplan) {
                        setFileNameMatplan(kunde.matplan)
                        firebase.storage().ref().child('users/' + _usr.email + '/matplan/' + kunde.matplan).getDownloadURL().then(function(url) {
                            console.log('Matplan ' + url)
                            setFileUrlMatplan(url)
                        })
                        setFileNameTreningsplan(kunde.treningsplan)
                        firebase.storage().ref().child('users/' + _usr.email + '/treningsplan/' + kunde.treningsplan).getDownloadURL().then(function(url) {
                            console.log('Treningsplan ' + url);
                            setFileUrlTreningsplan(url)
                        }) 
                    } else if(kunde.treningsplan) {
                        setFileNameTreningsplan(kunde.treningsplan)
                        firebase.storage().ref().child('users/' + _usr.email + '/treningsplan/' + kunde.treningsplan).getDownloadURL().then(function(url) {
                            console.log('Treningsplan ' + url);
                            setFileUrlTreningsplan(url)
                        })
                    }
                    else if(kunde.matplan) {
                        setFileNameMatplan(kunde.matplan)
                        firebase.storage().ref().child('users/' + _usr.email + '/matplan/' + kunde.matplan).getDownloadURL().then(function(url) {
                            console.log('Matplan ' + url)
                            setFileUrlMatplan(url)
                        }) 
                    } else {
                        console.log('Ingen treningsplan og ingen matplan')
                    }
                } 
            })
            setIsLoading(false)
        })
    }, [])

    return(
        <div>
            {
                isLoading ? <div className="loadingDivMain"><p>Loading...</p></div> : <InnerComp fileUrlMatplan={fileUrlMatplan} fileUrlTreningsplan={fileUrlTreningsplan} />
            }
        </div>
    )
}

