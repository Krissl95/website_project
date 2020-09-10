import React, { useState } from 'react'
import ProgressBar from './progressbar'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'


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
        <form style={{ marginTop: '20px'}}  onChange={changeHandeler}>
            <Button
                variant="contained"
                color="default"
                startIcon={<CloudUploadIcon />}
                style={{cursor: 'default', marginBottom: '30px', marginTop: '100px'}}
            >
                <label style={{cursor: 'pointer'}}>
                <input style={{display: 'none'}} type="file" />
                Last opp
                </label>
            </Button>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;