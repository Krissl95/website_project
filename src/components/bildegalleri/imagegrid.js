import React, { useState } from 'react'
import useFirestore from './usefirestore'
import './imagegrid.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const firebase = require("firebase");

const ImageGrid = ({ setSelectedImg, loggedIn }) => {


    const [delImg, setDelImg] = useState(null)

    const { docs } = useFirestore('images');
    console.log(docs);

    if(delImg) {
        // Kode for å slette bilde i firestore/database
        const database = firebase.firestore();
        const databaseRef = database.collection('images').doc(delImg);
        databaseRef.delete().then(() => {

        })

        // Kode for å slette bilde i storage
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const desertRef = storageRef.child(delImg);
        desertRef.delete().then(() => {
            
        })
        setDelImg(null)
    }

    return(
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="uploaded pic" onClick={() => setSelectedImg(doc.url)} />
                    {
                        loggedIn ? 
                        <Button
                        onClick={() => setDelImg(doc.id)}
                        variant="contained"
                        color="secondary"
                        style={{position: 'absolute', top: 0, right: 0}}
                        startIcon={<DeleteIcon />}
                      >
                        Slett
                      </Button>
                        : null
                    }
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;