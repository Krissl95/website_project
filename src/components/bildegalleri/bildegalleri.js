import React, { useState, useEffect } from 'react'
import UploadForm from './uploadform.js'
import ImageGrid from './imagegrid'
import Modal from './modal'
import './bildegalleri.css'

const firebase = require("firebase");

const BildeGalleriComponent = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(_usr => {
            if(!_usr) {
                setLoggedIn(false)
            } else if(_usr && _usr.email === 'kriss122830@gmail.com') {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        })
    })

    return(
        <div className="mainDivBildegalleri">
            {
                loggedIn ? 
                <UploadForm />
                : null
            }
            <ImageGrid setSelectedImg={setSelectedImg} loggedIn={loggedIn} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    );
}

export default BildeGalleriComponent;