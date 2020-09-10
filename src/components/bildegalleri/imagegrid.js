import React, { useState } from 'react'
import useFirestore from './usefirestore'
import './imagegrid.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const firebase = require("firebase");

const ImageGrid = ({ loggedIn }) => {


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
        <div className="img-container">
            <div className="img-grid">
                { docs && docs.map(doc => (
                    <div className={loggedIn ? "img-wrap-loggedIn" : "img-wrap"} key={doc.id}>
                        {
                            loggedIn ? 
                            <Button
                            onClick={() => setDelImg(doc.id)}
                            variant="contained"
                            color="secondary"
                            className="imageGalleryBtn"
                            startIcon={<DeleteIcon />}
                        >
                            Slett
                        </Button>
                            : null
                        }
                        <img className="images" src={doc.url} alt="uploaded pic" />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ImageGrid;