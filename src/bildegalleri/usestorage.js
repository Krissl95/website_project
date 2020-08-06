import { useState, useEffect } from 'react'


const firebase = require("firebase");

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = firebase.storage().ref(file.name);
        const collectionRef = firebase.firestore().collection('images');
        const timestamp = firebase.firestore.FieldValue.serverTimestamp;

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url: url, createdAt: createdAt });
            setUrl(url);
        })
    }, [file]);

    return { progress, error, url };
}

export default useStorage;