import { useState, useEffect } from 'react'

const firebase = require("firebase");

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const collectionRef = firebase.firestore();

    useEffect(() => {
        const unsub = collectionRef.collection(collection)
        // desc -> betyr nyeste først av createdAt som lagrer tidspungt for opplasting.
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        })
        return () => unsub();
    }, [collection])

    return {docs};
}

export default useFirestore;