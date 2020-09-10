import React, { useState, useEffect } from 'react'
import UploadForm from './uploadform.js'
import ImageGrid from './imagegrid'
import './bildegalleri.css'

const firebase = require("firebase");

export default function BildeGalleriComponent() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(_usr => {
            if(!_usr) {
                setLoggedIn(false)
            } else if(_usr && _usr.email === 'kriss122830@gmail.com') {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
            setIsLoading(false)
        })
    })

    return(
        <div className="mainDivBildegalleri">
            {
                loggedIn ? 
                <UploadForm />
                : null
            }
            {
                isLoading ? <div className="isLoadingGalleri"><p>Loading...</p></div> : <ImageGrid loggedIn={loggedIn} />
            }
        </div>
    );
}