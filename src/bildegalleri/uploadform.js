import React, { useState } from 'react'
import ProgressBar from './progressbar'


const UploadForm = () => {
    // React hooks
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandeler = (e) => {
        const selected = e.target.files[0];
        // Sjekker om arrayen 'types' inneholder den type filen som lastes opp av brukeren
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }

    return(
        <form>
            <input type="file" onChange={changeHandeler} />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;